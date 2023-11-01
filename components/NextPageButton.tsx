import { Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function NextPageButton({
    linkTo,
    buttonLabel,
}) {
    return <>
        <a
            style={{
                margin: '10px',
            }}
            // target="_new"
            href={linkTo}
            className="btn btn-fill wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.4s">{buttonLabel + "  "}
        <i className="fa fa-arrow-right" />
    </a >

    {/* <Button
            href={linkTo}
            style={{
                backgroundColor: 'red',
            }}
            variant="contained"
            endIcon={<NavigateNextIcon />}
            className="">
            {buttonLabel}
        </Button> */}
    </>
}