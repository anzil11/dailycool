import { ServiceItem, HeroSlide, FAQItem, Testimonial, ProjectItem } from '../types';

export const COMPANY_INFO = {
  name: 'DAILY COOL ELECTROMECHANICAL WORKS L.L.C',
  shortName: 'DAILY COOL',
  website: 'www.dailycool.ae',
  phones: ['+971 55 639 6003', '+971 55 618 0800'],
  email: 'dailycoolae@gmail.com|info@dailycool.ae',
  location: 'Dubai - UAE',
  address: 'Business Bay / Al Quoz Industrial Area, Dubai, United Arab Emirates',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM | 24/7 Emergency Response',
  pillars: ['MECHANICAL', 'ELECTRICAL', 'PLUMBING'],
  aboutText: [
    'Daily Cool Electromechanical Works LLC is a registered company in UAE, dealing with mechanical, electrical and plumbing works in residential, commercial and industrial sectors.',
    'Daily Cool team takes pride in the fact that we have never compromised on the quality and services provided to our customers.',
    'We are committed to provide our clients with cost effective services and assist them in meeting the project schedules with innovation & technical excellence resulting in a long term relationship based on trust, honesty and loyalty.'
  ]
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'HVAC & Air Conditioning Excellence',
    subtitle: 'Commercial & Residential Central AC, VRF Systems & Chillers',
    tagline: 'Precision Cooling & Air Quality in Dubai',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Explore Air Conditioning Services',
    stats: { label: 'Energy Efficiency Boost', value: 'Up to 35%' }
  },
  {
    id: 2,
    title: 'Precision Mechanical & Electrical Infrastructure',
    subtitle: 'LV Panels, Switchgears, G.I Ducting & Ventilation Networks',
    tagline: 'DEWA Compliant Electrical & Duct Engineering',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Discover Electrical & Ducting',
    stats: { label: 'Safety & Quality Record', value: '100% Guaranteed' }
  },
  {
    id: 3,
    title: 'Advanced Commercial & Residential Plumbing',
    subtitle: 'PPR, PVC, PEX Systems, Water Tanks & Heavy Duty Pump Maintenance',
    tagline: 'Reliable Water & Drainage Solutions across UAE',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'View Plumbing Solutions',
    stats: { label: 'Emergency Response', value: 'Under 60 Mins' }
  },
  {
    id: 4,
    title: 'Annual Building & Luxury Villa Maintenance',
    subtitle: 'Turnkey AMC, Microtopping, Interior Works & Facility Upkeep',
    tagline: 'Hassle-Free Maintenance for Commercial & Residential Spaces',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Book AMC Inspection',
    stats: { label: 'Client Retention Rate', value: '98% Trust' }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'electrical-works',
    title: 'Electrical Works & Switchgear',
    category: 'Electrical',
    iconName: 'Zap',
    shortDesc: 'DEWA-compliant LV distribution panels, DB wiring, cabling, and power infrastructure.',
    bulletPoints: [
      'Supply & installation of LV distribution panels, MDBs, SMDBs, and DB wiring.',
      'DEWA approved load distribution, main switchgear, and power cabling.',
      'Lighting control automation, emergency lighting, and earthing protection.',
      'Thermal imaging DB panel audits, load balancing, and fault troubleshooting.'
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'plumbing-works',
    title: 'Plumbing Works',
    category: 'Plumbing',
    iconName: 'Droplets',
    shortDesc: 'Complete supply and installation of commercial & residential plumbing systems.',
    bulletPoints: [
      'Supply & installation of commercial & residential building works using PVC, PPR, CU, PEX system.',
      'Supply & Installation of water tanks and pressurized booster systems.',
      'Rain & Sewage water piping and drainage networks.',
      'Irrigation water piping and backflow prevention.'
    ],
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'air-conditioning-works',
    title: 'Air Conditioning Works',
    category: 'Mechanical',
    iconName: 'Wind',
    shortDesc: 'Energy-efficient air conditioning supply, installation and central VRF systems.',
    bulletPoints: [
      'Supply and installation of energy-efficient air conditioning systems for both commercial and residential buildings.',
      'Design and installation of central air conditioning systems, split units, and VRF (Variable Refrigerant Flow) systems.',
      'Chilled water pipework and AHU/FCU installation.',
      'System balancing, gas charging, and thermal insulation.'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
{
  id: 'ventilation-works',
  title: 'Ventilation Works',
  category: 'Mechanical',
  iconName: 'Fan',
  shortDesc: 'Fresh air and exhaust ventilation systems for clean indoor air quality.',
  bulletPoints: [
    'Supply and installation of mechanical ventilation systems for improved indoor air quality.',
    'Design and installation of energy-efficient exhaust and fresh air systems for both commercial and residential buildings.',
    'Kitchen hood exhaust and basement car park ventilation.',
    'Acoustic sound attenuator and inline blower integration.'
  ],
image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'},
  {
    id: 'pump-maintenance-service',
    title: 'Pump Maintenance Service',
    category: 'Plumbing',
    iconName: 'Wrench',
    shortDesc: 'Inspection, repair, and servicing of domestic and booster water pump systems.',
    bulletPoints: [
      'Supply, installation, and maintenance of water pump systems.',
      'Inspection and servicing for optimal performance and longevity.',
      'Repair and replacement of faulty pump components, impellers, and control panels.',
      'Pressure vessel alignment and routine preventive maintenance.'
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ducting-works',
    title: 'Ducting Works',
    category: 'Mechanical',
    iconName: 'Maximize2',
    shortDesc: 'HVAC duct fabrication, installation, and air distribution optimization.',
    bulletPoints: [
      'Supply, fabrication, and installation of ducting systems for HVAC.',
      'Design and implementation of efficient air distribution networks.',
      'Maintenance and repair of duct systems for optimal airflow and performance.',
      'Thermal insulation cladding and air diffuser balancing.'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
  id: 'interlock-works',
  title: 'Interlock Works',
  category: 'Civil Works',
  iconName: 'LayoutGrid',
  shortDesc: 'Professional interlock paving solutions for residential, commercial, and industrial projects in the UAE.',
  bulletPoints: [
    'Design, supply, and installation of premium interlock paving blocks.',
    'Driveways, walkways, parking areas, patios, and landscape paving.',
    'Repair, replacement, and maintenance of damaged interlock surfaces.',
    'Durable, aesthetically appealing, and weather-resistant paving solutions.'
  ],
image: 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?auto=format&fit=crop&w=800&q=80'},
  // {
  //   id: 'irrigation-works',
  //   title: 'Irrigation Works',
  //   category: 'Plumbing',
  //   iconName: 'Sprout',
  //   shortDesc: 'Automated landscape and agricultural irrigation networks in UAE.',
  //   bulletPoints: [
  //     'Design, supply, and installation of efficient irrigation systems.',
  //     'Maintenance and repair of irrigation networks for optimal water distribution.',
  //     'Automation and optimization of irrigation for agricultural and landscape applications.',
  //     'Drip irrigation, solenoid valves, and smart timer controllers.'
  //   ],
  //   image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80'
  // },
  {
    id: 'gi-ducting-works',
    title: 'G.I Ducting Works',
    category: 'Mechanical',
    iconName: 'Layers',
    shortDesc: 'Durable, corrosion-resistant Galvanized Iron ductwork for HVAC.',
    bulletPoints: [
      'Supply, fabrication, and installation of GI ducting systems for HVAC.',
      'Design and implementation of durable and corrosion-resistant duct networks.',
      'Maintenance and repair of GI ducting for efficient airflow and performance.',
      'Fire-rated ductwork compliance for commercial facilities.'
    ],
  image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'floorings',
    title: 'Floorings',
    category: 'Maintenance & Interiors',
    iconName: 'Grid',
    shortDesc: 'Commercial and residential tile, vinyl, epoxy, and wooden flooring solutions.',
    bulletPoints: [
      'Supply and installation of various flooring solutions for residential, commercial, and industrial spaces.',
      'Durable and aesthetic flooring options, including tile, vinyl, epoxy, and wooden finishes.',
      'Heavy-duty anti-slip industrial floor coatings.',
      'Precision screeding and subfloor preparation.'
    ],
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'building-annual-maintenance',
    title: 'Building Annual Maintenance (AMC)',
    category: 'Maintenance & Interiors',
    iconName: 'ShieldCheck',
    shortDesc: 'Preventive and breakdown AMC contracts for electrical, mechanical & plumbing.',
    bulletPoints: [
      'Comprehensive annual maintenance for residential and commercial buildings.',
      'Regular inspection, servicing, and repair of electrical, mechanical, and plumbing systems.',
      'Preventive maintenance to ensure safety, efficiency, and longevity of building infrastructure.',
      '24/7 emergency response callout team for subscribers.'
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'villa-maintenance',
    title: 'Villa Maintenance',
    category: 'Maintenance & Interiors',
    iconName: 'Home',
    shortDesc: 'Turnkey upkeep for luxury villas including HVAC, plumbing, and landscaping.',
    bulletPoints: [
      'Complete maintenance solutions for luxury villas and private residences.',
      'Regular upkeep of electrical, mechanical, plumbing, and HVAC systems.',
      'Landscaping, cleaning, and preventive maintenance for a hassle-free living experience.',
      'Water tank cleaning, AC duct sanitization, and DB panel thermal auditing.'
    ],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'microtopping',
    title: 'Microtopping',
    category: 'Maintenance & Interiors',
    iconName: 'Sparkles',
    shortDesc: 'Seamless decorative micro-topping for modern floors, walls, and countertops.',
    bulletPoints: [
      'Supply and application of seamless micro-topping for floors, walls, and surfaces.',
      'Durable and decorative finishing for residential and commercial spaces.',
      'Customizable designs with a smooth, modern, and aesthetic appeal.',
      'Waterproof, stain-resistant architectural cementitious overlays.'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'interior-works',
    title: 'Interior Works',
    category: 'Maintenance & Interiors',
    iconName: 'Layout',
    shortDesc: 'Turnkey fit-out, false ceilings, architectural lighting, and space planning.',
    bulletPoints: [
      'Complete interior design and execution for residential and commercial spaces.',
      'Custom furniture, false ceilings, lighting, and space planning solutions.',
      'Interior works that blend functionality, aesthetics, and comfort seamlessly.',
      'Gypsum partition walls and acoustic ceiling panel integration.'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
  id: 'cctv-works',
  title: 'CCTV Works',
  category: 'Security Systems',
  iconName: 'Camera',
  shortDesc: 'Professional CCTV surveillance system installation and maintenance services across the UAE.',
  bulletPoints: [
    'Supply and installation of HD and IP CCTV camera systems.',
    'Indoor and outdoor surveillance solutions for homes, offices, and commercial facilities.',
    'DVR/NVR setup, remote monitoring, and mobile app integration.',
    'Maintenance, troubleshooting, upgrades, and annual maintenance contracts (AMC).'
  ],
  image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
},
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What sectors does Daily Cool Electromechanical Works LLC serve in Dubai?',
    answer: 'We provide specialized Mechanical, Electrical, Plumbing (MEP), and interior maintenance solutions across residential villas, commercial office towers, industrial warehouses, retail outlets, and hospitality projects throughout Dubai and the UAE.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Are your electrical and plumbing works compliant with DEWA & UAE regulations?',
    answer: 'Yes! All electrical installations, distribution boards, wiring, and plumbing networks executed by Daily Cool strictly adhere to DEWA (Dubai Electricity and Water Authority) guidelines and Dubai Municipality standards.',
    category: 'Execution & Quality'
  },
  {
    id: 'faq-3',
    question: 'What does your Annual Maintenance Contract (AMC) cover for buildings and villas?',
    answer: 'Our comprehensive AMC includes scheduled preventive inspections, emergency repair call-outs, AC filter cleaning & gas check, electrical DB panel thermal audits, water pump maintenance, plumbing leak checks, and priority 24/7 technical support.',
    category: 'AMC & Maintenance'
  },
  {
    id: 'faq-4',
    question: 'What types of Air Conditioning systems do you supply and install?',
    answer: 'We design, supply, install, and maintain all types of HVAC systems, including VRF/VRV central systems, Chilled Water FCUs/AHUs, Package AC units, Ducted Split units, and High-Wall Split units for residential and commercial properties.',
    category: 'MEP Services'
  },
  {
    id: 'faq-5',
    question: 'What is Microtopping and where can it be applied?',
    answer: 'Microtopping is an ultra-thin (2-3mm) seamless polymer-modified cementitious coating applied over existing floors, walls, and surfaces. It provides a sleek, modern concrete aesthetic that is durable, waterproof, and ideal for modern interiors and commercial spaces.',
    category: 'MEP Services'
  },
  {
    id: 'faq-6',
    question: 'How fast is Daily Cool’s emergency response time for active contract holders?',
    answer: 'For active AMC contract clients in Dubai, our emergency mobile repair unit guarantees on-site attendance within 60 minutes for urgent power failures, major water leaks, or main AC system breakdowns.',
    category: 'AMC & Maintenance'
  },
  {
    id: 'faq-7',
    question: 'How can I request a site inspection and detailed quotation?',
    answer: 'You can request a free site visit by filling out our online contact form, calling us directly at +971 55 639 6003 or +971 55 618 0800, or sending project drawings to dailycoolae@gmail.com|info@dailycool.ae. Our senior MEP engineer will arrange an inspection within 24 hours.',
    category: 'General'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Sultan Al Mansoori',
    companyRole: 'Property Manager',
    sector: 'Commercial Tower, Business Bay',
    comment: 'Daily Cool handled the VRF AC replacement and ducting overhaul for our 12-storey office building. Outstanding commitment to schedule and top-tier technical quality.',
    rating: 5
  },
  {
    id: 't-2',
    clientName: 'Marcus Vance',
    companyRole: 'Villa Owner',
    sector: 'Jumeirah Golf Estates, Dubai',
    comment: 'We signed a full Villa Maintenance AMC with Daily Cool. Their technicians are always punctual, courteous, and extremely skilled in electrical and water pump diagnostics.',
    rating: 5
  },
  {
    id: 't-3',
    clientName: 'Rashid H. Al Nuaimi',
    companyRole: 'Operations Director',
    sector: 'Industrial Complex, Al Quoz',
    comment: 'Reliable MEP contractors in Dubai are hard to come by. Daily Cool provided flawless G.I ducting, ventilation, and epoxy flooring under strict deadlines. Highly recommended!',
    rating: 5
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Commercial Chilled Water & VRF Air Conditioning Overhaul',
    category: 'Mechanical',
    sector: 'Commercial',
    location: 'Business Bay, Dubai',
    completionYear: '2025',
    description: 'Complete replacement and modern ducting retrofitting of chilled water FCUs and 400 HP Daikin VRF systems across 12 commercial floors.',
    highlights: ['28% reduction in energy consumption', 'Zero operational downtime during working hours', 'DEWA energy audit certified'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-2',
    title: 'Luxury Villa Turnkey Electrical DB & PPR Plumbing Installation',
    category: 'Electrical',
    sector: 'Residential',
    location: 'Palm Jumeirah & Emirates Hills, Dubai',
    completionYear: '2025',
    description: 'High-end MEP execution for a 6-bedroom ultra-luxury estate featuring smart lighting control panels, central water booster pumps, and microtopping floor finishes.',
    highlights: ['DEWA load approval & cable termination', 'PEX water manifold silent system', 'Seamless microtopping floor overlay'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-3',
    title: 'Industrial Warehouse Heavy G.I Ducting & Ventilation Network',
    category: 'Mechanical',
    sector: 'Industrial',
    location: 'Al Quoz Industrial Area, Dubai',
    completionYear: '2024',
    description: 'Fabrication and installation of heavy-gauge Galvanized Iron (G.I) air supply & exhaust ducts with fire dampers and inline jet fans for a 45,000 sq ft logistics facility.',
    highlights: ['Fire-rated SMACNA standard ductwork', 'Automated carbon monoxide exhaust sensors', 'Delivered 5 days ahead of project schedule'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-4',
    title: 'Water Tank Replacement & Pressurized Booster Pump System',
    category: 'Plumbing',
    sector: 'Residential',
    location: 'Dubai Marina Residential Complex',
    completionYear: '2024',
    description: 'Turnkey upgrade of main domestic water holding tanks with GRP panel tanks, dual VFD booster pumps, and anti-scald mixing valves.',
    highlights: ['Constant water pressure across 24 floors', 'Dubai Municipality hygiene compliance', 'Includes 2-year AMC package'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-5',
    title: 'Fine Dining Restaurant Fit-Out & Kitchen Hood Exhaust Ducting',
    category: 'Mechanical',
    sector: 'Commercial',
    location: 'Downtown Dubai / DIFC',
    completionYear: '2024',
    description: 'Comprehensive MEP fit-out for a premier dining space including stainless steel kitchen hoods, ESP filtration units, grease traps, and decorative gypsum ceilings.',
    highlights: ['Zero-odor ESP discharge filtration', 'Civil Defence approved fire suppression', 'Custom decorative microtopping floor'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-6',
    title: 'Corporate Building Annual Maintenance (AMC) Facilities Management',
    category: 'Turnkey AMC',
    sector: 'Commercial',
    location: 'DCC / Deira Commercial Zone, Dubai',
    completionYear: 'Ongoing',
    description: 'Full-scope preventive and breakdown MEP maintenance contract managing HVAC chillers, DB thermal imaging audits, water filtration, and emergency repairs.',
    highlights: ['Sub-45 minute emergency callout response', 'Dedicated 24/7 resident technician team', '100% equipment uptime guarantee'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
];

