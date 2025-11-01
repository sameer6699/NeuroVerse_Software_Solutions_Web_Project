import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function StickyDemoCTA() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        onClick={() => navigate("/contact")}
        size="lg"
        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white h-14 px-6"
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Request Demo
      </Button>
    </motion.div>
  );
}
