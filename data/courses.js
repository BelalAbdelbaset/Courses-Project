export const coursesData = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
    category: 'web',
    duration: '40 hours',
    students: 15420,
    rating: 4.8,
    price: '$89.99',
    originalPrice: '$199.99',
    level: 'Beginner to Advanced',
    learningOutcomes: [
      'Build responsive websites with HTML5 and CSS3',
      'Master JavaScript ES6+ and modern frameworks',
      'Create full-stack applications with Node.js',
      'Deploy applications to production servers'
    ]
  },
  {
    id: 2,
    title: 'iOS App Development with Swift',
    description: 'Create beautiful iOS applications using Swift and SwiftUI framework.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    category: 'mobile',
    duration: '35 hours',
    students: 8920,
    rating: 4.9,
    price: '$79.99',
    originalPrice: '$149.99',
    level: 'Intermediate',
    learningOutcomes: [
      'Master Swift programming language',
      'Build iOS apps with SwiftUI',
      'Integrate with iOS frameworks',
      'Publish apps to App Store'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    description: 'Learn the principles of user interface and user experience design.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
    category: 'design',
    duration: '28 hours',
    students: 12350,
    rating: 4.7,
    price: '$69.99',
    originalPrice: '$129.99',
    level: 'All Levels',
    learningOutcomes: [
      'Understand design principles and psychology',
      'Create wireframes and prototypes',
      'Master design tools like Figma',
      'Conduct user research and testing'
    ]
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Develop comprehensive digital marketing strategies for business growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    category: 'business',
    duration: '32 hours',
    students: 6780,
    rating: 4.6,
    price: '$59.99',
    originalPrice: '$119.99',
    level: 'Beginner',
    learningOutcomes: [
      'Create effective marketing campaigns',
      'Master social media marketing',
      'Understand SEO and content marketing',
      'Analyze marketing performance metrics'
    ]
  },
  {
    id: 5,
    title: 'React.js Advanced Concepts',
    description: 'Deep dive into advanced React concepts, hooks, and state management.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    category: 'web',
    duration: '25 hours',
    students: 4560,
    rating: 4.9,
    price: '$74.99',
    originalPrice: '$139.99',
    level: 'Advanced',
    learningOutcomes: [
      'Master React Hooks and Context API',
      'Implement state management with Redux',
      'Build scalable React applications',
      'Optimize React app performance'
    ]
  },
  {
    id: 6,
    title: 'Android Development with Kotlin',
    description: 'Build modern Android applications using Kotlin and Jetpack Compose.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    category: 'mobile',
    duration: '38 hours',
    students: 5670,
    rating: 4.8,
    price: '$84.99',
    originalPrice: '$159.99',
    level: 'Intermediate to Advanced',
    learningOutcomes: [
      'Learn Kotlin programming language',
      'Build Android apps with Jetpack Compose',
      'Integrate with Android APIs',
      'Publish apps to Google Play Store'
    ]
  }
]

export const getCourseById = (id) => {
  return coursesData.find(course => course.id === parseInt(id)) || 
         coursesData.find(course => course.id.toString() === id)
} 