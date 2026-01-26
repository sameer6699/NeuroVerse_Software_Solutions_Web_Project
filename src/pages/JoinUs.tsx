import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Linkedin, MapPin, Briefcase, Clock, Search, Filter, Plus } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

/**
 * Join Us Page Component
 * 
 * This page displays current job openings and opportunities at NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function JoinUs() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Job alerts form state
  const [jobAlertEmail, setJobAlertEmail] = useState("");
  const [jobAlertCategory, setJobAlertCategory] = useState("");
  const [jobAlertLocation, setJobAlertLocation] = useState("");
  const [jobAlertCategories, setJobAlertCategories] = useState<string[]>([]);
  const [jobAlertLocations, setJobAlertLocations] = useState<string[]>([]);

  // Handle hero search
  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to job listings section
      const jobsSection = document.getElementById('job-openings-section');
      if (jobsSection) {
        jobsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Current Job Openings Data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      postedDate: "2 days ago",
      description: "We are looking for an experienced Senior Software Engineer to join our dynamic engineering team. You will work on cutting-edge AI and cloud technologies, building scalable solutions that impact millions of users.",
      requirements: [
        "5+ years of software development experience",
        "Strong proficiency in React, TypeScript, and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving and communication skills"
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "1 week ago",
      description: "Join our product team to drive innovation and shape the future of our technology platforms. You'll work closely with engineering, design, and business teams to deliver exceptional products.",
      requirements: [
        "3+ years of product management experience",
        "Strong analytical and strategic thinking skills",
        "Experience with agile development methodologies",
        "Excellent stakeholder management abilities"
      ]
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Remote",
      type: "Full-time",
      postedDate: "3 days ago",
      description: "We're seeking a talented Data Scientist to help us unlock insights from complex datasets and build predictive models that drive business decisions.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years of experience in machine learning and data analysis",
        "Proficiency in Python, R, and SQL",
        "Experience with ML frameworks (TensorFlow, PyTorch)"
      ]
    },
    {
      id: 4,
      title: "UX Designer",
      department: "Design",
      location: "Austin, TX",
      type: "Full-time",
      postedDate: "5 days ago",
      description: "Create beautiful and intuitive user experiences that delight our customers. Work on innovative projects that combine design thinking with cutting-edge technology.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Strong portfolio showcasing user-centered design",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Experience with user research and testing"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      postedDate: "1 week ago",
      description: "Help us build and maintain robust infrastructure that scales with our growing platform. You'll work on CI/CD pipelines, cloud infrastructure, and automation tools.",
      requirements: [
        "4+ years of DevOps or infrastructure engineering experience",
        "Strong knowledge of Kubernetes, Docker, and Terraform",
        "Experience with cloud platforms (AWS preferred)",
        "Scripting skills in Python, Bash, or similar"
      ]
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Chicago, IL",
      type: "Full-time",
      postedDate: "4 days ago",
      description: "Lead our marketing initiatives and help grow our brand presence. You'll develop and execute marketing strategies that drive engagement and business growth.",
      requirements: [
        "5+ years of marketing experience",
        "Strong digital marketing and analytics skills",
        "Experience with marketing automation tools",
        "Excellent written and verbal communication skills"
      ]
    },
    {
      id: 7,
      title: "Sales Representative",
      department: "Sales",
      location: "Boston, MA",
      type: "Full-time",
      postedDate: "6 days ago",
      description: "Join our sales team and help businesses transform with our innovative solutions. You'll build relationships with enterprise clients and drive revenue growth.",
      requirements: [
        "3+ years of B2B sales experience",
        "Strong negotiation and closing skills",
        "Experience in technology or SaaS sales",
        "Self-motivated with a track record of meeting targets"
      ]
    },
    {
      id: 8,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      postedDate: "2 weeks ago",
      description: "Ensure our customers achieve success with our products. You'll work closely with clients to understand their needs and help them maximize value from our solutions.",
      requirements: [
        "3+ years of customer success or account management experience",
        "Strong relationship-building and communication skills",
        "Technical aptitude and problem-solving abilities",
        "Experience with CRM tools (Salesforce preferred)"
      ]
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "all" || job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment;

    return matchesSearch && matchesLocation && matchesDepartment;
  });

  // Get unique locations and departments for filters
  const locations = ["all", ...Array.from(new Set(jobOpenings.map(job => job.location.split(",")[0].trim())))];
  const departments = ["all", ...Array.from(new Set(jobOpenings.map(job => job.department)))];

  const handleJobClick = (jobId: number) => {
    // Navigate to job details or application page
    navigate(`/careers/job/${jobId}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section
        id="home"
        ref={heroRef}
        className="relative pt-44 md:pt-52 lg:pt-60 xl:pt-64 pb-8 md:pb-12 px-4 min-h-[95vh] md:min-h-[100vh] flex flex-col justify-end overflow-hidden"
      >
        {/* Background Image with Improved Positioning and Zoom Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{
            scale: backgroundScale,
            y: backgroundY,
            backgroundImage: `url(${images.banners.joinUsHeroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Subtle Parallax Effect */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-blue-900/10"></div>
        </motion.div>

        {/* Search Box at Bottom of Hero Section */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              onSubmit={handleHeroSearch}
              className="w-full max-w-4xl mx-auto"
            >
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                {/* Magnifying Glass Icon */}
                <div className="absolute left-4 md:left-6 z-10">
                  <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>

                {/* Search Input */}
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs by location, profession or keywords"
                  className="w-full h-14 md:h-16 pl-12 md:pl-16 pr-20 md:pr-24 text-base md:text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
                />

                {/* Search Button - Blue Circular Button */}
                <button
                  type="submit"
                  className="absolute right-2 md:right-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300 shadow-lg"
                  aria-label="Search jobs"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Join Us Description Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto max-w-5k-content relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8">
            {/* Social Media Icons - Left Side */}
            <div className="flex flex-col gap-5 md:gap-6 flex-shrink-0">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/neuroverse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-blue-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer group relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors relative z-10" />
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/neuroverse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-blue-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer group relative overflow-hidden"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Description Text - Right Side */}
            <div className="flex-1">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Join Our Team
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Be part of a diverse collective of innovators, entrepreneurs, and experts working together to shape the future of technology. Explore our current job openings and find the perfect opportunity to grow your career with us.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  At NeuroVerse, we're committed to building a team that reflects the diversity of the world we serve. We welcome candidates from all backgrounds and experiences to apply for our open positions.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Job Openings Section */}
      <section id="job-openings-section" className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left mb-4">
              Current Job Openings
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
              Discover exciting career opportunities across various departments. We're always looking for talented individuals to join our growing team.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs..."
                  className="pl-10 h-12 border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white text-gray-900"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Department Filter */}
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white text-gray-900"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleJobClick(job.id)}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      {/* Left Side - Job Info */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm md:text-base">{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm md:text-base">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm md:text-base">{job.type}</span>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="text-xs md:text-sm text-gray-500">
                          Posted {job.postedDate}
                        </div>
                      </div>

                      {/* Right Side - Apply Button */}
                      <div className="flex items-center md:items-start">
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold group-hover:gap-3 transition-all">
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                  No job openings match your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLocation("all");
                    setSelectedDepartment("all");
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-8 text-sm text-gray-600">
            Showing {filteredJobs.length} of {jobOpenings.length} job{jobOpenings.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Sign up for Job Alerts Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Left Column - Heading and Description */}
            <div className="flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
              >
                Sign up for job alerts
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg"
              >
                Make sure you see job opportunities when they become available. Just add a few details below to stay up to date with jobs that suit you and your skills.
              </motion.p>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!jobAlertEmail || (jobAlertCategories.length === 0 && jobAlertLocations.length === 0)) {
                    alert("Please fill in all required fields and add at least one category or location preference.");
                    return;
                  }
                  // Handle form submission
                  console.log("Job Alert Signup:", {
                    email: jobAlertEmail,
                    categories: jobAlertCategories,
                    locations: jobAlertLocations,
                  });
                  // Reset form
                  setJobAlertEmail("");
                  setJobAlertCategory("");
                  setJobAlertLocation("");
                  setJobAlertCategories([]);
                  setJobAlertLocations([]);
                  // Show success message (you can add toast notification here)
                  alert("Thank you for signing up for job alerts! We'll notify you when matching positions become available.");
                }}
                className="space-y-6 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
              >
                {/* Email Field */}
                <div className="space-y-2.5">
                  <Label htmlFor="job-alert-email" className="text-sm md:text-base font-semibold text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="job-alert-email"
                    type="email"
                    value={jobAlertEmail}
                    onChange={(e) => setJobAlertEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="h-12 md:h-14 text-base bg-blue-50/50 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Category and Location Row with Add Button */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Category Field */}
                    <div className="space-y-2.5">
                      <Label htmlFor="job-alert-category" className="text-sm md:text-base font-semibold text-gray-900">
                        Category <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="job-alert-category"
                        type="text"
                        value={jobAlertCategory}
                        onChange={(e) => setJobAlertCategory(e.target.value)}
                        placeholder="Job Category"
                        className="h-12 md:h-14 text-base bg-white border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200"
                      />
                    </div>

                    {/* Location Field */}
                    <div className="space-y-2.5">
                      <Label htmlFor="job-alert-location" className="text-sm md:text-base font-semibold text-gray-900">
                        Location <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Select
                          value={jobAlertLocation}
                          onValueChange={setJobAlertLocation}
                        >
                          <SelectTrigger
                            id="job-alert-location"
                            className="h-12 md:h-14 text-base bg-white border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 w-full"
                          >
                            <SelectValue placeholder="Location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            {locations
                              .filter((loc) => loc !== "all")
                              .map((location) => (
                                <SelectItem key={location} value={location}>
                                  {location}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Add Button - Positioned to the right */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (jobAlertCategory.trim() && jobAlertLocation) {
                          setJobAlertCategories([...jobAlertCategories, jobAlertCategory]);
                          setJobAlertLocations([...jobAlertLocations, jobAlertLocation]);
                          setJobAlertCategory("");
                          setJobAlertLocation("");
                        } else {
                          alert("Please fill in both Category and Location before adding.");
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

                {/* Display Added Categories and Locations */}
                {(jobAlertCategories.length > 0 || jobAlertLocations.length > 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 pt-2 border-t border-gray-200"
                  >
                    <p className="text-sm font-semibold text-gray-900">Added Preferences:</p>
                    <div className="flex flex-wrap gap-2">
                      {jobAlertCategories.map((cat, index) => (
                        <motion.span
                          key={`cat-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm"
                        >
                          <span>{cat}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const newCats = [...jobAlertCategories];
                              newCats.splice(index, 1);
                              setJobAlertCategories(newCats);
                            }}
                            className="hover:text-blue-900 hover:bg-blue-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-200"
                            aria-label="Remove category"
                          >
                            ×
                          </button>
                        </motion.span>
                      ))}
                      {jobAlertLocations.map((loc, index) => (
                        <motion.span
                          key={`loc-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium shadow-sm"
                        >
                          <span>{loc}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const newLocs = [...jobAlertLocations];
                              newLocs.splice(index, 1);
                              setJobAlertLocations(newLocs);
                            }}
                            className="hover:text-green-900 hover:bg-green-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-200"
                            aria-label="Remove location"
                          >
                            ×
                          </button>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Sign up Button */}
                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-blue-600 text-white font-semibold text-base md:text-lg rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 w-full md:w-auto min-w-[200px] shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <span>Sign up</span>
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Full Width */}
      <section className="relative w-full py-12 md:py-16">
        <div className="w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 xl:p-20 text-center">
          <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
              Don't see a role that fits?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              We're always looking for exceptional talent. Join our talent community and we'll notify you when a position that matches your skills becomes available.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/careers/login")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                <span>Create Career Profile</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
