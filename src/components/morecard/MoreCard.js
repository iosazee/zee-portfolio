import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const MoreCard = ({img, title, desc, gitLink, liveLink, stack, hasLink}) => {
  return (
        <Card sx={{ maxWidth: 345 }}>
            <>
                <LazyLoadImage
                    src={require(`../../assets/${img}`)}
                    alt="feature project"
                    height={140}
                    width={'100%'}
                />
            </>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="--secondary-color-4">
                    {desc}
                </Typography>
                    {stack}
            </CardContent>
            <CardActions>
                <Link href={gitLink} color="inherit">
                   <Typography component="small">
                        <GitHubIcon />
                   </Typography>
                </Link>
                <Link href={liveLink} color="inherit">
                <Typography component="small">
                    {
                        hasLink ?  <OpenInNewIcon /> : <CloseIcon />
                    }
                   </Typography>
                </Link>
            </CardActions>
    </Card>
  );
}

export default MoreCard;
