const ProspectsData = [
  {
    name: 'John Doe',
    city: 'New York',
    jobTitle: 'Software Engineer',
    linkedIn: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    phoneNo: '+1-123-456-7890',
    email: 'johndoe@example.com',
    profilePicURL: 'https://example.com/johndoe.jpg',
    notes: 'Loves coding in JavaScript.',
    tasks: [
      'Finish React project',
      'Update GitHub profile'
    ],
    timeline: [
      { event: 'Joined Tech Corp', date: '2018-01-15' },
      { event: 'Promoted to Senior Developer', date: '2020-03-10' }
    ],
    companies: [
      {
        name: 'Tech Corp',
        position: 'Senior Developer',
        duration: '3 years'
      },
      {
        name: 'Innovate Inc',
        position: 'Developer',
        duration: '2 years'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'StartUp XYZ',
        role: 'Technical Lead',
        project: 'AI Development'
      },
      {
        company: 'Big Data Solutions',
        role: 'Project Manager',
        project: 'Data Analytics'
      }
    ]
  },
  {
    name: 'Jane Smith',
    city: 'San Francisco',
    jobTitle: 'Product Manager',
    linkedIn: 'https://linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    phoneNo: '+1-987-654-3210',
    email: 'janesmith@example.com',
    profilePicURL: 'https://example.com/janesmith.jpg',
    notes: 'Expert in agile methodologies.',
    tasks: [
      'Plan Q3 roadmap',
      'Conduct user interviews'
    ],
    timeline: [
      { event: 'Joined Global Tech', date: '2017-06-01' },
      { event: 'Launched new product', date: '2019-09-15' }
    ],
    companies: [
      {
        name: 'Global Tech',
        position: 'Product Manager',
        duration: '4 years'
      },
      {
        name: 'Web Solutions',
        position: 'Project Coordinator',
        duration: '3 years'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'Cloud Services Ltd',
        role: 'Product Lead',
        project: 'Cloud Infrastructure'
      },
      {
        company: 'App Development Co',
        role: 'Consultant',
        project: 'Mobile App Strategy'
      }
    ]
  },
  {
    name: 'Robert Brown',
    city: 'Los Angeles',
    jobTitle: 'Marketing Director',
    linkedIn: 'https://linkedin.com/in/robertbrown',
    twitter: 'https://twitter.com/robertbrown',
    phoneNo: '+1-555-123-4567',
    email: 'robertbrown@example.com',
    profilePicURL: 'https://example.com/robertbrown.jpg',
    notes: 'Focuses on digital marketing strategies.',
    tasks: [
      'Design new ad campaign',
      'Analyze marketing metrics'
    ],
    timeline: [
      { event: 'Joined Creative Media', date: '2015-11-20' },
      { event: 'Awarded Best Marketer', date: '2018-05-05' }
    ],
    companies: [
      {
        name: 'Creative Media',
        position: 'Marketing Director',
        duration: '5 years'
      },
      {
        name: 'Ad Agency',
        position: 'Marketing Manager',
        duration: '4 years'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'Digital Marketing Solutions',
        role: 'Head of Marketing',
        project: 'SEO Campaign'
      },
      {
        company: 'Social Media Experts',
        role: 'Advisor',
        project: 'Brand Strategy'
      }
    ]
  },
  {
    name: 'Alice Green',
    city: 'Chicago',
    jobTitle: 'Data Scientist',
    linkedIn: 'https://linkedin.com/in/alicegreen',
    twitter: 'https://twitter.com/alicegreen',
    phoneNo: '+1-222-333-4444',
    email: 'alicegreen@example.com',
    profilePicURL: 'https://example.com/alicegreen.jpg',
    notes: 'Specializes in machine learning.',
    tasks: [
      'Develop predictive models',
      'Prepare data for analysis'
    ],
    timeline: [
      { event: 'Joined Data Analytics Inc', date: '2019-02-25' },
      { event: 'Published research paper', date: '2021-04-30' }
    ],
    companies: [
      {
        name: 'Data Analytics Inc',
        position: 'Data Scientist',
        duration: '2 years'
      },
      {
        name: 'AI Research Lab',
        position: 'Research Assistant',
        duration: '1 year'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'Tech Innovators',
        role: 'Lead Data Scientist',
        project: 'AI Product Development'
      },
      {
        company: 'Healthcare Analytics',
        role: 'Consultant',
        project: 'Data-driven Solutions'
      }
    ]
  },
  {
    name: 'Michael Johnson',
    city: 'Austin',
    jobTitle: 'DevOps Engineer',
    linkedIn: 'https://linkedin.com/in/michaeljohnson',
    twitter: 'https://twitter.com/michaeljohnson',
    phoneNo: '+1-444-555-6666',
    email: 'michaeljohnson@example.com',
    profilePicURL: 'https://example.com/michaeljohnson.jpg',
    notes: 'Expert in CI/CD pipelines.',
    tasks: [
      'Improve deployment processes',
      'Monitor system performance'
    ],
    timeline: [
      { event: 'Joined Cloud Solutions', date: '2018-07-14' },
      { event: 'Implemented CI/CD', date: '2019-10-11' }
    ],
    companies: [
      {
        name: 'Cloud Solutions',
        position: 'DevOps Engineer',
        duration: '3 years'
      },
      {
        name: 'Network Solutions',
        position: 'System Administrator',
        duration: '2 years'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'Tech World',
        role: 'Infrastructure Lead',
        project: 'Cloud Migration'
      },
      {
        company: 'FinTech Corp',
        role: 'DevOps Consultant',
        project: 'Automated Deployment'
      }
    ]
  },
  {
    name: 'Emily White',
    city: 'Seattle',
    jobTitle: 'UX Designer',
    linkedIn: 'https://linkedin.com/in/emilywhite',
    twitter: 'https://twitter.com/emilywhite',
    phoneNo: '+1-777-888-9999',
    email: 'emilywhite@example.com',
    profilePicURL: 'https://example.com/emilywhite.jpg',
    notes: 'Passionate about user-centered design.',
    tasks: [
      'Create wireframes',
      'Conduct usability tests'
    ],
    timeline: [
      { event: 'Joined Design Studio', date: '2017-09-10' },
      { event: 'Launched new UI', date: '2020-01-22' }
    ],
    companies: [
      {
        name: 'Design Studio',
        position: 'UX Designer',
        duration: '4 years'
      },
      {
        name: 'Creative Works',
        position: 'Junior Designer',
        duration: '2 years'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'Web Design Co',
        role: 'Lead UX Designer',
        project: 'Website Redesign'
      },
      {
        company: 'App Creators',
        role: 'Design Consultant',
        project: 'Mobile App UX'
      }
    ]
  },
  {
    name: 'Daniel Lee',
    city: 'Denver',
    jobTitle: 'Business Analyst',
    linkedIn: 'https://linkedin.com/in/daniellee',
    twitter: 'https://twitter.com/daniellee',
    phoneNo: '+1-888-999-0000',
    email: 'daniellee@example.com',
    profilePicURL: 'https://example.com/daniellee.jpg',
    notes: 'Skilled in data-driven decision making.',
    tasks: [
      'Analyze market trends',
      'Prepare business reports'
    ],
    timeline: [
      { event: 'Joined Business Solutions', date: '2016-04-05' },
      { event: 'Promoted to Senior Analyst', date: '2018-08-20' }
    ],
    companies: [
      {
        name: 'Business Solutions',
        position: 'Business Analyst',
        duration: '5 years'
      },
      {
        name: 'Market Research Co',
        position: 'Analyst',
        duration: '3 years'
      }
    ],
    pocOfOpportunity: [
      {
        company: 'Finance Experts',
        role: 'Lead Analyst',
        project: 'Financial Analysis'
      },
      {
        company: 'Retail Insights',
        role: 'Consultant',
        project: 'Market Research'
      }
    ]
  }
];

export default ProspectsData;
