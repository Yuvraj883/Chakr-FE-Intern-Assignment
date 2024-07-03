import ProspectsData from '@/components/ProspectsData';
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

interface ProspectProps {
  params: {
    id: string;
  };
}

const Prospect: React.FC<ProspectProps> = ({ params }) => {
  const { id } = params;
  const person = ProspectsData.find((person) => person.id.toString() === id);

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <main className='flex flex-col p-4'>
      <div className='flex items-center gap-2 p-2'>
        <Link href='/people'>
          <ChevronLeft className='cursor-pointer' />
        </Link>
        <UserRound /> {person.name}
      </div>

      <div className='border-2 border-gray-200 flex flex-col md:flex-row max-h-[92vh]'>
        <section className='w-full md:w-[30%] border-r-2 border-gray-200 min-h-[92vh] p-4'>
          {/* User Info Section */}
          <div className='flex flex-col items-center gap-4 my-4 pb-4 border-b-2 border-gray-200'>
            <img
              src={person.profilePicURL}
              className='h-20 w-20 rounded-full'
              alt='profile-pic'
            />
            <p className='text-md font-medium'>{person.name}</p>
          </div>

          <div className='flex flex-col justify-between '>
            <div className='flex justify-between'>
              <div className='flex flex-col justify-between text-gray-600 text-sm font-medium'>
                <div className='flex gap-2'>
                  <Building2 />
                  <p>City</p>
                </div>
                <div className='flex gap-2'>
                  <Mail />
                  <p>Email</p>
                </div>
                <div className='flex gap-2'>
                  <Phone />
                  <p>Phone</p>
                </div>
                <div className='flex gap-2'>
                  <BriefcaseBusiness />
                  <p>Job Title</p>
                </div>
              </div>

              <div className='flex flex-col '>
                <div className='flex gap-2'>
                  <p className='text-gray-800 text-md font-medium'>
                    {person.city}
                  </p>
                </div>
                <div className='flex gap-2'>
                  <p className='text-gray-800 text-md font-medium'>
                    {person.email}
                  </p>
                </div>
                <div className='flex  gap-2'>
                  <p className='text-gray-800 text-md font-medium'>
                    {person.phoneNo}
                  </p>
                </div>
                <div className='flex  gap-2'>
                  <p className='text-gray-800 text-md font-medium'>
                    {person.jobTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className='flex gap-2 px-2 py-4 text-md'>
              <Link href={person.linkedIn}>
                <Linkedin />
              </Link>
              <Link href={person.twitter}>
                <X/>
              </Link>
            </div>
          </div>

          <div className='border-t-2 border-gray-200 p-2'>
            <h1 className='font-bold'>Companies</h1>
            <div>
              {person.companies.map((company, index) => (
                <div className='flex justify-between text-sm p-4' key={index}>
                  <div className='font-semibold'>{company.name}</div>
                  <div>{company.position}</div>
                  <div>{company.duration}</div>
                </div>
              ))}
            </div>
            <div className='border-t-2 border-gray-200 p-2'>
              <h1 className='font-bold text-md'>POC</h1>
              <div>
                {person.pocOfOpportunity.map((poc, index) => (
                  <ul key={index} className='flex justify-between text-[12px]'>
                    <li className='font-medium'>{poc.company}</li>
                    <li>{poc.role}</li>
                    <li>{poc.project}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className='w-full md:w-[70%] bg-gray-100 p-4'>
          <TabsProspect tasks={person.tasks} />
        </section>
      </div>
    </main>
  );
};

export default Prospect;
