export default function ItemPage(){
    return(
        <div>
            <h3>HI</h3>
        </div>
    )
}

export async function getStaticPaths(){
    const paths = [1, 2, 3]

    return{
        paths,
        fallback: false
    }
}