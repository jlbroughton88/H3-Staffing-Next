import { useRouter } from "next/router";

const Single = () => {

    const router = useRouter();
    const { uid } = router.query;


    return (
    <div>UID: { uid } </div>
    )
}

export default Single;