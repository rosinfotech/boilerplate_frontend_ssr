import { Button } from "antd";
import Link from "next/link";


const NextPage = () => {
    return (
        <Link href="/">
            <Button type="primary">Go to IndexPage</Button>
        </Link>
    );
};

export default NextPage;
