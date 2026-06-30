export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vehicle', href: '#vehicle' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Packages', href: '#packages' },
  { label: 'Driver', href: '#driver' },
  { label: 'Contact', href: '#contact' },
]

export const brand = {
  name: 'Sri Vari Travels',
  tagline: '18 years of service',
  tamilTagline: 'எளிதில் செல்லும் நம்பகமான பயணம்',
  logoPath: '/images/ICON.jpeg',
}

export const heroStats = [
  { value: '24/7', label: 'Easy booking help' },
  { value: 'Group', label: 'Good for Family / Friends tour' },
  { value: 'Temple', label: 'Good for temple tours' },
]
// Note: Removed duplicate/general text blocks. Keep gallery (images/videos) and concise package/pricing info below.

export const introCards = [
  {
    title: 'Easy Booking',
    description: 'Call or WhatsApp for quick reservations and itinerary help.',
  },
  {
    title: 'Comfortable Travel',
    description: 'Well-maintained van with seating suited for family trips.',
  },
  {
    title: 'Flexible Options',
    description: 'One-day trips, per-km bookings and tailored packages available.',
  },
]

export const vehicleGallery = [
  {
    title: 'Temple front view',
    image: '/images/svt-van-front.jpeg',
    alt: 'Sri Vari Travels van parked in front of a temple entrance',
  },
  {
    title: 'Side profile',
    image: '/images/svt-van-side-2.jpeg',
    alt: 'Sri Vari Travels van side view parked under trees',
  },
  {
    title: 'Full body view',
    image: '/images/svt-van-side-1.jpeg',
    alt: 'Sri Vari Travels van full side view in an open parking area',
  },
  {
    title: 'Clean side view',
    image: '/images/svt-van-wash-side.jpeg',
    alt: 'Sri Vari Travels van side view during washing and cleaning',
  },
  {
    title: 'City front view',
    image: '/images/svt-van-city-front.jpeg',
    alt: 'Sri Vari Travels van front view parked on a city street',
  },
  {
    title: 'Heritage stop',
    image: '/images/svt-van-heritage-front.jpeg',
    alt: 'Sri Vari Travels van parked near a heritage building',
  },
  {
    title: 'Inside seating',
    image: '/images/svt-van-interior.jpeg',
    alt: 'Interior seating view inside Sri Vari Travels van',
  },
  {
    title: 'Driver and van',
    image: '/images/svt-van-driver-front.jpeg',
    alt: 'Driver standing in front of Sri Vari Travels van',
  },
  {
    title: 'Latest gallery photo',
    image: '/images/svt-van-new-2026-06-29.jpeg',
    alt: 'Latest Sri Vari Travels van photo added to the gallery',
  },
  {
    title: 'Inside tour',
    image: '/images/inside-tour.mp4',
    thumbnail: '/images/inside-tour-thumb.jpg',
    alt: 'Inside tour of Sri Vari Travels van',
    isVideo: true,
  },
]

export const pricingCards = [
  {
    title: 'Daily Rental',
    price: `From Rs. ${3500}/day`,
    description: 'Van rent per day. Driver charges extra as specified.',
    features: ['Ideal for full-day local or outstation use', 'Driver included separately'],
  },
  {
    title: 'Per Kilometer',
    price: `From Rs. ${18}/km`,
    description: 'Distance-based pricing for outstation and point-to-point travel.',
    features: ['Clear distance rate', 'One-way or round-trip options'],
  },
]

export const pricingInfo = {
  vanRentPerDay: 3500, // INR
  driverPerDay: 300, // INR
  perKilometer: 18, // INR/km
  longDistancePerKilometer: 25, // INR/km for distance beyond 300 km
  exclusions: ['Parking', 'Tolls', 'Permits (required for travel beyond Tamil Nadu)'],
  note: 'Final price depends on route, stops and travel dates. Contact or WhatsApp for an accurate pricing details.',
}

export const pricingNotes = [
  'Parking, tolls and permit charges are not included.',
  'Waiting or night charges may apply for extended hours.',
  'Contact or WhatsApp for the final, route-specific quote.',
]


export const packageTravelInfo = {
  title: 'Places to travel',
  description:
    'Courtallam, Iyappan Temple, customised temple tours (within Tamil Nadu), Ooty, Munnar, Kodaikanal, Rameshwaram, Kanyakumari and more.',
  note: 'Routes can also be customised based on your family trip, temple visit or hill-station plan.',
  places: [
    'Courtallam',
    'Iyappan Temple',
    'Customised temple tours within Tamil Nadu',
    'Ooty',
    'Munnar',
    'Kodaikanal',
    'Rameshwaram',
    'Kanyakumari',
  ],
}

export const spotLocations = [
  'Courtallam',
  "Iyappan Temple",
  'Ooty',
  'Munnar',
  'Kodaikanal',
  'Rameshwaram',
  'Kanyakumari',
]

export const contactCards = [
  {
    title: 'Phone',
    value: '+91 90434 22294',
    href: 'tel:+919043422294',
  },
  {
    title: 'WhatsApp',
    value: 'Message for quick booking',
    href: 'https://wa.me/919025257336',
  },
]

export const contactLocation = {
  address: '152 South Perumail Maistry Street, South Gate, Madurai',
}

export const driverHighlights = [
  'Experienced local driver with good route knowledge',
  'Polite and patient service suited for families and elders',
  'Flexible timing and safe driving practices',
]

export const locations = [
  'Tirupati',
  'Chennai',
  'Bengaluru',
  'Vellore',
  'Kanchipuram',
  'Yelagiri',
]

export const testimonials = [
  {
    name: 'R. Kumar',
    trip: 'Family trip',
    quote: 'Good travel service, clean van, and safe driving for our family trip.',
  },
  {
    name: 'Anitha S.',
    trip: 'Airport trip',
    quote: 'Pickup was on time and the travel was smooth and comfortable.',
  },
  {
    name: 'Mohan P.',
    trip: 'Temple trip',
    quote: 'Very patient driver and good support during our temple visit.',
  },
]
