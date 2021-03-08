import Link from 'next/link'

export default () => (
        <div>
            <h1 className="title">
                Read{' '}
                <Link href="/">
                    <a>Go to home</a>
                </Link>
                {' '}
                <Link href="/books">
                    <a>Go to books</a>
                </Link>
            </h1>
        </div>
)
