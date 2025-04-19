import Link from 'next/link'

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8 z-20'>
      <div className='text-dark border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:inline-block '>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
