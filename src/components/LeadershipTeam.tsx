import { motion, useReducedMotion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Laurens Dauchy',
    role: 'CEO & President',
    image: '/lovable-uploads/f4e07beb-64aa-480a-b1e3-86b36d192802.png',
    initials: 'LD'
  },
  {
    id: 2,
    name: 'Igor Tasic',
    role: 'CTO',
    image: '/lovable-uploads/565ce6f3-9088-4a1a-80f6-8685da99b33b.png',
    initials: 'IT'
  }
];

const LeadershipTeam = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      },
    },
  };

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              variants={cardVariants}
            >
              Leadership team
            </motion.h2>
          </motion.div>

          {/* Team Members */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {teamMembers.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                variants={cardVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
  variants: any;
}

const TeamMemberCard = ({ member, variants }: TeamMemberCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group flex-1"
      variants={variants}
      whileHover={shouldReduceMotion ? {} : { 
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <div className="backdrop-blur-sm bg-white/20 border border-white/40 rounded-[3rem] p-6 flex items-center gap-4 hover:bg-white/25 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative z-20">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Avatar className="w-16 h-16 border border-white/30">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback className="bg-white/20 text-gray-900 text-lg font-semibold">
              {member.initials}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Member Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-gray-600 text-sm">
            {member.role}
          </p>
        </div>

        {/* LinkedIn Icon */}
        <div className="flex-shrink-0">
          <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer" />
        </div>
      </div>
    </motion.div>
  );
};

export default LeadershipTeam;