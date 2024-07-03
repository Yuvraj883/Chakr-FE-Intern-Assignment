import Companies from '@/components/CompaniesList';
import TabsProspect from '@/components/TabsProspect';
import {
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  UserRound,
  X,
} from 'lucide-react';
import Link from 'next/link';

interface CompaniesProps {
  params: {
    companyName: string;
  };
}

const Company: React.FC<CompaniesProps> = ({ params }) => {
  const { companyName } = params;
  const org = Companies.find((org: any) => org.name === companyName);

  if (!org) {
    return <div>Company not found</div>;
  }

  return (
    <main className='flex flex-col p-4'>
      <div className='flex items-center gap-2 p-2'>
        <Link href='/people'>
          <ChevronLeft className='cursor-pointer' />
        </Link>
        <UserRound /> {org.name}
      </div>

      <div className='border-2 border-gray-200 flex flex-col md:flex-row max-h-[92vh]'>
        <section className='w-full md:w-[30%] border-r-2 border-gray-200 min-h-[92vh] p-4'>
          {/* User Info Section */}
          <div className='flex flex-col items-center gap-4 my-4 pb-4 border-b-2 border-gray-200'>
            <img
              src={org.logo}
              className='h-20 w-20 rounded-full'
              alt='profile-pic'
            />
            <p className='text-md font-medium'>{org.name}</p>
          </div>

          <div className='flex justify-between text-gray-600 text-sm font-medium'>
            <div className='flex gap-2'>
              <Building2 />
              <p>{org.address}</p>
            </div>
            <div className='flex gap-2'>
              <Mail />
              <p>{org.domain}</p>
            </div>
            <div className='flex gap-2'>
              {/* Placeholder for LinkedIn */}
              <Link href={'#'}>
                <Linkedin />
              </Link>
            </div>
            <div className='flex gap-2'>
              <BriefcaseBusiness />
              <p>{org.employees}</p>
            </div>
          </div>

          <div className='flex gap-2 px-2 py-4 text-md'>
            <Link href='/'>
              <Twitter />
            </Link>
            <Link href='/'>
              <X />
            </Link>
          </div>
        </section>

        <section className='w-full md:w-[70%] bg-gray-100 p-4'>
          <TabsProspect tasks={[]} />
        </section>
      </div>
    </main>
  );
};

export default Company;
