import ProspectsData from '@/components/ProspectsData'
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
} from 'lucide-react'
import Link from 'next/link'

interface ProspectProps {
  params: {
    id: string
  }
}

const Prospect: React.FC<ProspectProps> = ({ params }) => {
  const { id } = params
  const person = ProspectsData.filter((person) => person.id.toString() === id)

  return (
    <main className='flex flex-col p-2 '>
      <div className='flex gap-2 p-2'>
        <Link href='/people'>
          <ChevronLeft className='cursor-pointer' />
        </Link>
        <UserRound /> {person[0].name}
      </div>

      <div className=' border-2 border-b-0 border-gray-200  flex max-h-[92vh]'>
        <section className='w-[30%] border-r-2 border-gray-200 min-h-[92vh] p-4'>
          {/* user info section */}
          <div className='flex flex-col items-center justify-center gap-2 my-4 pb-12 border-b-2 border-gray-200'>
            <img
              src={person[0].profilePicURL}
              className=' h-20 w-20 rounded-full  '
              alt='profile-pic'
            />
            <p className='text-md font-medium'>{person[0].name}</p>
          </div>

          <div className='flex flex-col'>
            <div className='flex '>
              <div className='flex flex-col justify-between text-gray-600 text-sm font-medium'>
                <div className='flex gap-2'>
                  <Building2 />
                  <p className=''>City</p>
                </div>
                <div className='flex gap-2'>
                  <Mail />
                  <p className=''>Email</p>
                </div>
                <div className='flex gap-2'>
                  <Phone />
                  <p className=''>Phone</p>
                </div>
                <div className='flex gap-2'>
                  <BriefcaseBusiness />
                  <p className=''>Job Title</p>
                </div>
              </div>

              <div className='flex flex-col p-2 '>
                <div className='flex justify-between'>
                  <p className='text-whhite text-md font-medium'>
                    {person[0].city}
                  </p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-whhite text-md font-medium'>
                    {person[0].email}
                  </p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-whhite text-md font-medium'>
                    {person[0].phoneNo}
                  </p>
                </div>
                <div className='flex justify-between text-gray-500 text-sm'>
                  <p className='text-whhite text-md font-medium'>
                    {person[0].jobTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className='flex gap-2 px-2 py-4 text-md'>
              <Link href={person[0].linkedIn}>
                <Linkedin />
              </Link>
              <Link href={person[0].twitter}>
                <X className='font-bold italic' />
              </Link>
            </div>
          </div>
          <div className='border-t-2 border-gray-200 p-2'>
            <h1 className='font-bold'>Companies</h1>
            <div>
              {person[0].companies.map((company, index) => (
                <div className='flex justify-between text-sm p-4' key={index}>
                  <div className='font-semibold'>{company.name}</div>
                  <div>{company.position}</div>
                  <div>{company.duration}</div>
                </div>
              ))}
            </div>
            <div className='border-t-2 border-gray-200 '>
              <h1 className="font-bold text-md">POC</h1>
              <div>
                {
                  person[0].pocOfOpportunity.map((poc, index)=>(

                      <ul key={index} className='flex justify-between text-[12px]'>
                        <li className='font-medium'>{poc.company}</li>
                        <li> {poc.role}</li>
                        <li>{poc.project }</li>

                      </ul>

                  ))
                }
                 </div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </main>
  )
}

export default Prospect
