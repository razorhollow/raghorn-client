import { useState, useEffect } from 'react';
import { Typography, IconButton, Collapse, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

//styles
import styled from '@emotion/styled'

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  justify-content: space-between;
  width: 160px;
`

//types
import { Comment } from '../../types/models'
interface CommentsSectionProps {
  comments: Comment[];
}

const CommentBar = ({ comments }: CommentsSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const commentsCount = comments?.length || 0;
  return (
    <>
      {commentsCount === 0 ? (
        <CommentBox onClick={handleExpandClick}>
          <CreateIcon />
          <Typography variant="body2" color="text.secondary">
            No Comments Yet
          </Typography>
        </CommentBox>
      ) : (
        <CommentBox onClick={handleExpandClick}>
          <CommentIcon 
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          />
          <Typography variant="body2" color="text.secondary">
            {commentsCount} Comments
          </Typography>
        </CommentBox>
      )}
      <IconButton
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        {/* <ExpandMoreIcon /> */}
      </IconButton>
      {comments &&
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {comments.map((comment, index) => (
              <Box key={comment.id}>
                <Typography paragraph>
                  {comment.comment}
                </Typography>
                <Divider textAlign='right'>{comment.profile?.name || "Unknown User"}</Divider>
              </Box>
            ))}
          </CardContent>
        </Collapse>
      }
      </>
  );
};

export default CommentBar;
