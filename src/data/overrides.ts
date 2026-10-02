/**
 * LK Business Solutions — lkbusinesssolutions.shop
 * LK BUSINESS SOLUTIONS LTD, company no. 14896950, London.
 * SIC: 46310 wholesale fruit and vegetables; 46370 wholesale coffee, tea,
 *      cocoa and spices; 70229 management consultancy; 96020 hairdressing
 *      and other beauty treatment.
 *
 * The register shows four activities across two quite different trades, so the
 * site says so plainly rather than pretending to be a single-purpose business.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Wholesale supply and business support in London',
      description:
        'LK Business Solutions Ltd, registered in England and Wales (company no. 14896950). Wholesale fruit and vegetables, coffee, tea and spices, management consultancy and salon services.',
    },
    hero: {
      eyebrow: 'Wholesale supply and business support, London',
      titleLead: 'Supply you can plan around,',
      titleMark: 'and help running the rest',
      lead:
        'A London company working across two trades: wholesale food supply, and support for the businesses that buy it. Tell us which side you need and you will get a straight answer about whether we can help.',
      secondaryCta: 'See what we supply',
      visualLabel: 'Registered in London since 2023',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'What a supplier should get right',
      subtitle: 'Four things that decide whether a supply arrangement is worth keeping.',
      items: [
        {
          icon: 'truck',
          title: 'Deliveries you can plan around',
          text: 'A delivery that arrives when it was promised is worth more than a cheaper one that does not. We agree a schedule and tell you early if anything threatens it.',
        },
        {
          icon: 'check-doc',
          title: 'Paperwork that matches the pallet',
          text: 'Every delivery comes with documentation that actually reflects what is on it, so your own records and stock counts hold up.',
        },
        {
          icon: 'chat',
          title: 'Someone who answers',
          text: 'You deal with the same person for ordering, queries and problems, rather than a different voice each time.',
        },
        {
          icon: 'shield',
          title: 'A company you can look up',
          text: 'Our company number and registered office are published here and on the public register, so you can check who you are buying from.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Two trades, one company',
      subtitle: 'Wholesale supply on one side, business support on the other.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'The process',
      title: 'From first enquiry to standing order',
      subtitle: 'How a supply arrangement or a piece of advisory work actually starts.',
      steps: [
        {
          title: 'Tell us what you need',
          text: 'Volumes, lines, how often, and where it has to land. For consultancy, just describe the problem.',
        },
        {
          title: 'We check we can do it',
          text: 'We would rather say no at this stage than take an order we cannot fill properly.',
        },
        {
          title: 'Terms in writing',
          text: 'Lines, prices, delivery days and payment terms set out in writing before the first order goes in.',
        },
        {
          title: 'Supply and review',
          text: 'We start the schedule, then look at how it is going together and adjust what is not working.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are buying from',
      subtitle: 'Taken from the public register, so you can check it independently.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'What buyers usually want to know before placing a first order.',
      items: [
        {
          q: 'Do you supply to businesses only, or to the public as well?',
          a: 'Our wholesale activity is aimed at businesses buying for resale or for their own operations. Tell us what you need and the quantity, and we will say whether it is something we can supply.',
        },
        {
          q: 'How are prices set?',
          a: 'Produce moves with the market and with quantity, so figures are quoted against your actual order rather than published as a list. You get the terms in writing before anything is despatched.',
        },
        {
          q: 'Why does the register list consultancy and salon services too?',
          a: 'Because the company genuinely does more than one thing. The SIC codes on our Companies House record cover wholesale of fruit and vegetables, wholesale of coffee, tea, cocoa and spices, management consultancy and hairdressing and beauty treatment. We would rather show all of them than hide the ones that do not fit a neat description.',
        },
        {
          q: 'Can you help with the running of the business, not just supply?',
          a: 'That is what the consultancy side is for. It is practical rather than theoretical: ordering, stock, margins, suppliers and the day-to-day decisions an owner has to make.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Tell us what you need supplied',
      lead: 'Lines, quantities and how often. We will tell you what we can do and on what terms.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Business Solutions',
      description:
        'A London limited company working across wholesale food supply and business support. Registered company details, as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'A supplier',
      titleMark: 'and a sounding board',
      lead:
        'Most of our work is supply. Some of it is sitting down with an owner and working out why the numbers are not doing what they should. The two turn out to go together.',
    },
    story: {
      title: 'How we work',
      subtitle: 'Supply is a promise about the future, so we are careful what we promise.',
      paragraphs: [
        'A wholesale relationship lives or dies on whether the delivery turns up as agreed. That is why we would rather decline a line we cannot source reliably than take the order and apologise later. When something does go wrong upstream, you hear it from us as soon as we know, not when the van fails to arrive.',
        'The consultancy side grew out of the same conversations. Owners buying stock from us wanted a view on ordering, margins and suppliers, which is exactly the ground we stand on. It is practical advice from people who deal with the same pressures, not a framework out of a textbook.',
        'The company has been on the register since May 2023, and everything about it is public. We would rather point you at that record than ask you to take our word for anything.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'truck', title: 'Reliability first', text: 'A date we can keep beats a date you would prefer to hear.' },
        { icon: 'check-doc', title: 'Terms in writing', text: 'Lines, prices and delivery days agreed before the first order.' },
        { icon: 'eye', title: 'Open about ourselves', text: 'Company number, registered office and filing history, all public.' },
        { icon: 'chat', title: 'Straight answers', text: 'If we cannot supply it or help with it, we say so.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Want to talk it through?',
      lead: 'Supply, advice, or working out which of the two you actually need.',
      secondaryCta: 'What we do',
    },
  },

  servicesPage: {
    seo: {
      title: 'Wholesale supply, consultancy and salon services',
      description:
        'Fresh produce, coffee, tea and spices wholesale, management consultancy and hairdressing and beauty services from LK Business Solutions Ltd, London.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'Four activities,',
      titleMark: 'all of them on the register',
      lead:
        'The list below matches the SIC codes filed at Companies House. If what you need is close to one of these, ask and we will tell you honestly whether we handle it.',
    },
    quoteNote:
      'Produce and dry goods move with the market and with quantity, so everything is quoted against your actual order. Nothing on this page is a fixed price or a binding offer.',
    cta: {
      eyebrow: 'Next step',
      title: 'Need a quote?',
      lead: 'Send the lines and quantities and we will come back with terms in writing.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Business Solutions',
      description:
        'Get in touch about wholesale supply or business support. Registered office: 124 City Road, London, EC1V 2NX. Company no. 14896950.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us what you need,',
      titleMark: 'and how much of it',
      lead: 'For supply, quantities and frequency matter more than anything else. For advice, just describe the problem.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'Which lines you need, and roughly how much of each.',
        'How often, and on which days delivery would have to land.',
        'Where it is going, and whether access is straightforward.',
        'Whether you are supplied elsewhere at the moment, and what is not working.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the details over and we will come back to you with what we can do.',
      secondaryCta: 'What we do',
    },
  },

  services: [
    {
      id: 'fresh-produce',
      icon: 'leaf',
      title: 'Fresh fruit and vegetables',
      summary: 'Wholesale produce for businesses that need the same quality on the same day each week.',
      points: [
        'Regular lines on an agreed schedule, so your ordering becomes routine.',
        'Quantities quoted against your actual order, not a one-size list.',
        'Early notice when the market or the weather is going to affect a line.',
        'Documentation with each delivery that matches what is on the pallet.',
      ],
    },
    {
      id: 'dry-goods',
      icon: 'coffee',
      title: 'Coffee, tea, cocoa and spices',
      summary: 'Dry goods wholesale, where consistency between deliveries matters more than anything.',
      points: [
        'Lines selected to stay consistent order after order.',
        'Quantities that suit your storage rather than a fixed case size.',
        'Clear labelling and paperwork for your own stock records.',
        'A named contact for substitutions and shortages.',
      ],
    },
    {
      id: 'consultancy',
      icon: 'bars',
      title: 'Management and business consultancy',
      summary: 'Practical advice on running the operation, from people who deal with the same pressures.',
      points: [
        'A plain look at ordering, stock levels and what they are costing you.',
        'Supplier arrangements, and whether yours are working.',
        'Margins, and where they are quietly disappearing.',
        'Advice you can act on this month, not a report that sits in a drawer.',
      ],
    },
    {
      id: 'salon-services',
      icon: 'scissors',
      title: 'Hairdressing and beauty services',
      summary: 'The salon side of the company, listed on the register alongside the rest.',
      points: [
        'Hairdressing and beauty treatment, as filed under SIC code 96020.',
        'Appointments arranged directly, not through this site.',
        'Get in touch for what is currently available and where.',
      ],
    },
  ],
};
