import PageNotFound from '../src/components/PageNotFound/PageNotFound'
import Link from 'next/link'

const Index = () => (
    <div>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/description"><a>Description</a></Link>
            </li>
            <li>
                <Link href="/filmzilla"><a>Description</a></Link>
            </li>
        </ul>
        <h1>Welcome to next.js!</h1>
        <PageNotFound/>
    </div>
);
export default Index;