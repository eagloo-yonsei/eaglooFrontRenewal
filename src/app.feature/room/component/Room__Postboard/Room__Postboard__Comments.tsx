import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRoomPostboardContext } from './Room__PostboardProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faHeart,
  faComment,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import CommentSubmitIcon from '../../../../../public/images/common/CommentSubmit.png';
import CommentUpdateIcon from '../../../../../public/images/common/CommentUpdate.png';
import CommentDeleteIcon from '../../../../../public/images/common/CommentDelete.png';
import CommentReportIcon from '../../../../../public/images/common/CommentReport.png';
import { PostComment } from 'app.modules/constant/interface';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';

export default function RoomPostBoardComments() {
  const { postCommentsOpen } = useRoomPostboardContext();
  if (!postCommentsOpen) {
    return null;
  }

  return (
    <OuterContainer>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
      <GapFiller />
    </OuterContainer>
  );
}

function Header() {
  const { selectedPost, togglePostLike, closePostComments } =
    useRoomPostboardContext();

  return (
    <HeaderContainer>
      <LeftHeader>
        <HeartIcon
          onClick={() => {
            togglePostLike(selectedPost!);
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </HeartIcon>
        {`${selectedPost?.postlikes.length}`}
        <CommentIcon>
          <FontAwesomeIcon icon={faComment} />
        </CommentIcon>
        {`${selectedPost?.postComments.length}`}
      </LeftHeader>
      <RightHeader>
        <HeaderIcon
          onClick={() => {
            closePostComments();
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </HeaderIcon>
      </RightHeader>
    </HeaderContainer>
  );
}

function Body() {
  const { selectedPost } = useRoomPostboardContext();
  const getUser = useGetUser();

  if (getUser?.isLoading) return null;
  return (
    <BodyContainer>
      {selectedPost?.postComments.map((comment) => {
        return (
          <CommentEach
            key={comment.id}
            comment={comment}
            userInfo={getUser?.info}
          />
        );
      })}
    </BodyContainer>
  );
}

function CommentEach({
  comment,
  userInfo,
}: {
  comment: PostComment;
  userInfo: any;
}) {
  const { deleteComment, updateComment, setUpdateCommentInput } =
    useRoomPostboardContext();
  const [hide, setHide] = useState<boolean>(true);
  const [compareUserId, setCompareUserId] = useState(false);

  const [editable, setEditable] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const toggleCommentControl = () => {
    setHide((prev) => !prev);
  };

  useEffect(() => {
    userInfo!.id === comment.userId
      ? setCompareUserId(true)
      : setCompareUserId(false);
  }, []);
  const stopPropagation = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleInputEvent = (e: React.ChangeEvent<HTMLDivElement>) => {
    setUpdateCommentInput(e.target.innerText);
  };
  const handleFocus = async () => {
    await setEditable(true);
    focusContentEditableTextToEnd(inputRef.current!);
  };

  const focusContentEditableTextToEnd = (element: HTMLElement) => {
    if (element.innerText.length === 0) {
      element.focus();
      return;
    }
    setEditable(true);
    const selection = window.getSelection();
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    newRange.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(newRange);
  };

  return (
    <CommentEachContainer
      onClick={stopPropagation}
      onMouseLeave={() => {
        setHide(true);
        setEditable(false);
      }}
    >
      <CommentUserName>{`${comment.userName}`}</CommentUserName>
      <CommentEachContainerRow>
        <CommentContents
          ref={inputRef}
          contentEditable={editable}
          suppressContentEditableWarning={true}
          onInput={handleInputEvent}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              updateComment(comment);
              setEditable(false);
            }
          }}
        >
          {comment.comment}
        </CommentContents>
        {!hide ? (
          compareUserId ? (
            <CommentControlContents>
              <CommentControlButton
                onClick={(e) => {
                  handleFocus();
                }}
                src={CommentUpdateIcon}
                className="test"
              />
              <CommentControlButton
                onClick={(e) => {
                  deleteComment(comment);
                }}
                src={CommentDeleteIcon}
              />
              <CommentControlButton
                onClick={(e) => {}}
                src={CommentReportIcon}
              />
            </CommentControlContents>
          ) : (
            <CommentControlContents style={{ width: '45px' }}>
              <CommentControlButton
                onClick={(e) => {}}
                src={CommentReportIcon}
              />
            </CommentControlContents>
          )
        ) : (
          <></>
        )}

        <CommentControllMenu isHide={hide} onClick={toggleCommentControl}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </CommentControllMenu>
      </CommentEachContainerRow>
    </CommentEachContainer>
  );
}

function Footer() {
  const { newCommentInput, setNewCommentInput, addComment, addingComment } =
    useRoomPostboardContext();

  return (
    <FooterContainer>
      <CommentInputContainer>
        <CommentInput
          type="text"
          disabled={addingComment}
          spellCheck="false"
          value={newCommentInput}
          placeholder="새 댓글 입력"
          onChange={(e) => {
            if (e.target.value.length <= 150) {
              setNewCommentInput(e.target.value);
            }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addComment();
            }
          }}
        />
        <CommentSendIcon
          onClick={() => {
            addComment();
          }}
        >
          <CommentSendImg src={CommentSubmitIcon} alt="comment submit icon" />
        </CommentSendIcon>
      </CommentInputContainer>
    </FooterContainer>
  );
}

const OuterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 95%;
  padding: 15px 5px 15px 10px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${(props) => props.theme.postCommentsBackground};
`;

const CommentsComponent = styled.div`
  display: flex;
  width: 100%;
  padding-left: 5px;
  padding-right: 15px;
`;

const HeaderContainer = styled(CommentsComponent)`
  justify-content: space-between;
  align-items: center;
  height: 30px;
  font-size: 24px;
  font-family: ${(props) => props.theme.postFont};
`;

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 20px;
  height: 100%;
`;

const HeartIcon = styled.div`
  color: ${(props) => props.theme.postHeartIconColor};
  cursor: pointer;
`;

const CommentIcon = styled.div`
  color: ${(props) => props.theme.postCommentIconColor};
`;

const RightHeader = styled(LeftHeader)`
  color: white;
`;

const HeaderIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BodyContainer = styled(CommentsComponent)`
  position: absolute;
  bottom: 60px;
  flex-direction: column;
  width: 90%;
  gap: 20px;
  height: calc(100% - 120px);
  overflow: auto;
`;

const CommentEachContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: fit-content;
  font-size: 14px;
  font-family: ${(props) => props.theme.postFont};
`;

const CommentEachContainerRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentUserName = styled.div`
  color: ${(props) => props.theme.postCommentUserNameColor};
`;

const CommentContents = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 90%;
  height: fit-content;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.postContentsColor};
  background-color: ${(props) => props.theme.questionPost};
  border-radius: 12px;
  padding: 10px 12px;
  z-index: 100;
  word-break: break-all;

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  }
`;

const CommentControllMenu = styled.div<{ isHide: boolean }>`
  padding: 10px 5px 10px 5px;
  color: ${(props) => props.theme.questionPost};
  display: ${(props) => (props.isHide ? 'flex' : 'none')};
  align-items: center;
`;

const CommentControlContents = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.postContentsColor};
  //background-color: rgba${(props) => props.theme.commentControlBackground};
  background-color: rgba(239, 119, 38, 1);
  border-radius: 10px;
  padding: 10px 12px 10px 20px;
  width: 100px;
  height: 100%;
  top: 0px;
  right: 15px;
`;

const CommentControlButton = styled.img`
  width: 16px;
  height: 16px;
`;

const FooterContainer = styled(CommentsComponent)`
  height: 36px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: ${(props) => props.theme.postFont};
  background-color: ${(props) => props.theme.questionPost};
  border: none;
  border-radius: 8px;
`;

const CommentInput = styled.input`
  display: flex;
  width: 85%;
  height: 100%;
  margin-left: 10px;
  font-size: 16px;
  font-family: ${(props) => props.theme.postFont};
  background-color: ${(props) => props.theme.questionPost};
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 16px;
    font-family: ${(props) => props.theme.postFont};
    color: ${(props) => props.theme.postCommentsBackground};
  }
`;

const CommentSendIcon = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.postCreateBackground};
`;

const CommentSendImg = styled.img`
  width: 24px;
`;

// TODO (enhancement dumbcode)
// comment 창이 나오는 걸 어떻게 처리해야할지
const GapFiller = styled.div`
  position: absolute;
  left: -10px;
  width: 10px;
  height: 95%;
  background-color: ${(props) => props.theme.postCommentsBackground};
`;
