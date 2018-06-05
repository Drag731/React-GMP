import Link from 'next/link'

const DescriptionWrap = () => (
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
        <h1>Welcome to description!</h1>
    </div>
);
export default DescriptionWrap;