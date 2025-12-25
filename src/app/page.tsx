import { Button } from "antd";
import Link from "next/link";


const IndexPage = () => {
    return (
        <Link href="/next-page">
            <Button type="primary">Go to NextPage</Button>
        </Link>
    );
};

export default IndexPage;
