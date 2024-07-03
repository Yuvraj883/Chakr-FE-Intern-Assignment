const ProspectsData = [
  { id:1,
    name: 'John Doe',
    city: 'New York',
    jobTitle: 'Software Engineer',
    linkedIn: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    phoneNo: '+1-123-456-7890',
    email: 'johndoe@example.com',
    profilePicURL: 'data:image/jpeg;base64,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',
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
  { id:2,
    name: 'Jane Smith',
    city: 'San Francisco',
    jobTitle: 'Product Manager',
    linkedIn: 'https://linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    phoneNo: '+1-987-654-3210',
    email: 'janesmith@example.com',
    profilePicURL: 'data:image/jpeg;base64,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',
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
  { id:3,
    name: 'Robert Brown',
    city: 'Los Angeles',
    jobTitle: 'Marketing Director',
    linkedIn: 'https://linkedin.com/in/robertbrown',
    twitter: 'https://twitter.com/robertbrown',
    phoneNo: '+1-555-123-4567',
    email: 'robertbrown@example.com',
    profilePicURL: 'https://images.pexels.com/photos/11143630/pexels-photo-11143630.jpeg',
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
  { id:4,
    name: 'Alice Green',
    city: 'Chicago',
    jobTitle: 'Data Scientist',
    linkedIn: 'https://linkedin.com/in/alicegreen',
    twitter: 'https://twitter.com/alicegreen',
    phoneNo: '+1-222-333-4444',
    email: 'alicegreen@example.com',
    profilePicURL: 'data:image/jpeg;base64,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',
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
  { id:5,
    name: 'Michael Johnson',
    city: 'Austin',
    jobTitle: 'DevOps Engineer',
    linkedIn: 'https://linkedin.com/in/michaeljohnson',
    twitter: 'https://twitter.com/michaeljohnson',
    phoneNo: '+1-444-555-6666',
    email: 'michaeljohnson@example.com',
    profilePicURL: 'https://thumbs.dreamstime.com/b/closeup-photo-pretty-lady-beaming-smile-white-teeth-long-brown-straight-hairstyle-wear-casual-orange-striped-t-shirt-isolated-181955640.jpg',
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
  { id:6,
    name: 'Emily White',
    city: 'Seattle',
    jobTitle: 'UX Designer',
    linkedIn: 'https://linkedin.com/in/emilywhite',
    twitter: 'https://twitter.com/emilywhite',
    phoneNo: '+1-777-888-9999',
    email: 'emilywhite@example.com',
    profilePicURL: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
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
  { id:7,
    name: 'Daniel Lee',
    city: 'Denver',
    jobTitle: 'Business Analyst',
    linkedIn: 'https://linkedin.com/in/daniellee',
    twitter: 'https://twitter.com/daniellee',
    phoneNo: '+1-888-999-0000',
    email: 'daniellee@example.com',
    profilePicURL: 'https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png',
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
