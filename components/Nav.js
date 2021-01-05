import Link from 'next/link'

export default function Nav() {

  return (
        <div className="flex flex-col items-center lg:flex-row">

          <div className="w-full px-10 py-10 lg:px-40 lg:w-1/2">
            <Link href="/">
              <a className="text-4xl font-bold">KONCYOL.</a>
            </Link>
          </div>

          <div className="hidden px-10 py-10 lg:block lg:px-40 lg:w-1/2">
            <Link href="/left-feature">
              <a className="mr-8">Landing Page</a>
            </Link>

            <Link href="/dua">
              <a className="mr-8">Dua</a>
            </Link>
          </div>


        </div>
  );
}
