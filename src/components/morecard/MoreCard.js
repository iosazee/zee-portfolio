import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const MoreCard = ({img, title, desc, gitLink, liveLink, stack}) => {
  return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={require(`../../assets/${img}`)}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="--secondary-color-4">
                    {desc}
                </Typography>
                <Typography variant="body2" component="span">
                    {stack}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={gitLink} color="inherit">
                   <Typography component="small">
                        <GitHubIcon />
                   </Typography>
                </Link>
                <Link href={liveLink} color="inherit">
                <Typography component="small">
                        <OpenInNewIcon />
                   </Typography>
                </Link>
            </CardActions>
    </Card>
  );
}

export default MoreCard;
