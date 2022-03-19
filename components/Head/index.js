import NextHead from "next/head";

function Head(props) {
    return (
        <>
            <NextHead>
                <meta name="viewport" content="width=device-width" />
                <link rel="shortcut icon" href="./img/F.png" />
                <title>{props.title}</title>
            </NextHead>
        </>
    )
}

export default Head;
