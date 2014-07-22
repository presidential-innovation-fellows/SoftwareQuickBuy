var itHwSolutions = [
   {
      id: "nitaacCioSp3",
      type: "gwac",
      name: "NITAAC CIO-SP3: Chief Information Officer – Solutions and Partners 3 (NIH)",
      site: "http://nitaac.nih.gov/nitaac/contracts/cio-sp3",
      availability: {
         federal: [ "all" ],
         state: [ "none" ], 
         local: [ "none" ],
         nonGovernment: [ "none" ]
      },
      fee: {
         slidingPercentage: {
            min: "0.0075",
            max: "0.01"
         },
         maximum: "150000",
         comment: "Sliding scale based on dollar volume."
      },
      expiration: "20221231",
      access: {
         contacts: [
            {
               name: "Dr. John Q. Sparrow",
               phone: "123-555-1234",
               email: "jsparrow@nih.gov"
            }
         ],
         orderingUrl: "https://nitaac.nih.gov/nitaac/e-ordering-systems"
      },
      offerings: [
         "IT Services for Biomedical Research, Health Sciences, and Healthcare",
         "Chief Information Officer (CIO) Support",
         "Imaging",
         "Outsourcing",
         "Integration Services",
         "Critical Infrastructure Protection and Information Assurance",
         "Digital Government",
         "Enterprise Management Systems",
         "Software Development"
      ]
   },
   {
      id: 'nasaSewp',
      type: "gwac",
      name: "SEWP: Solutions for Enterprise-Wide Procurement (NASA)",
      site: "http://www.sewp.nasa.gov/",
      availability: {
         federal: [ "all" ],
         state: [ "none" ], 
         local: [ "none" ],
         nonGovernment: [ "none" ]
      },
      fee: {
         fixedPercentage: "0.0045",
         maximum: "10000",
         comment: "Fixed percentage with a dollar cap."
      },
      expiration: "20140930",
      access: {
         contacts: [
            {
               name: "Capt. Jack Sparrow",
               phone: "123-555-1234",
               email: "jsparrow@nasa.gov"
            }
         ],
         orderingUrl: "http://www.sewp.nasa.gov/"
      },
      offerings: [
         "Desktop Computers and Laptops",
         "High performance servers / data-base servers",
         "Mass storage and network devices",
         "Advanced video and visualization solutions",
         "Computer support devices",
         "Security systems and tools",
         "Audio-Visual systems",
         "Cost per Copy Multi-Functional Printers",
         "Warranty and Maintenance",
         "Implementation and Installation",
         "Product-based Training"
      ]
   },
   {
      id: 'armyChess',
      type: "idiq",
      name: "CHESS: Computer Hardware Enterprise Software and Solutions (Army)",
      site: "https://chess.army.mil/",
      availability: {
         federal: [ "dod" ],
         state: [ "none" ], 
         local: [ "none" ],
         nonGovernment: [ "none" ]
      },
      fee: {
         fixedPercentage: "0",
         comment: "No fee"
      },
      expiration: "20140423",
      access: {
         contacts: [
            {
               name: "Brigadier General J.P. Falcon",
               phone: "123-555-1234",
               email: "jpfalcon@pentagon.mil"
            }
         ],
         orderingUrl: "https://chess.army.mil/"
      },
      offerings: [
         "Information Technology Enterprise Solutions (ITES)",
         "Army Desktop and Mobile Computing (ADMC)",
         "Provide commercial IT HW, SW, and Services"
      ]
   }
];
