import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './useStyles';

const ThumbTask = (props) => {
  const {url, title, imgUrl, userName} = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={title}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          请同学们尽快阅读完算法导论。
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.detail}>
		{" 详情"}
        </Typography>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            算法导论下载地址
          </Typography>
		  <Link>			https://github.com/mymmsc/books/blob/master/%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA%E4%B8%AD%E6%96%87%E7%89%88.pdf
</Link>
          <Typography paragraph>
            下节课将讲解此部分内容。
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ThumbTask;
