import { motion } from "framer-motion";

export const TrustedBySection = () => {
  const trustedByImages = [
    {
      src: "https://ik.imagekit.io/qcvroy8xpd/downloads/asset%204.jpeg?updatedAt=1762342827098",
      alt: "Professional Security Solutions"
    },
    {
      src: "https://ik.imagekit.io/qcvroy8xpd/downloads/asset%205.jpeg?updatedAt=1762342826818",
      alt: "Advanced Lock Technology"
    },
    {
      src: "https://ik.imagekit.io/qcvroy8xpd/downloads/asset%203.jpeg?updatedAt=1762342826949",
      alt: "Smart Home Security"
    },
    {
      src: "https://ik.imagekit.io/qcvroy8xpd/downloads/asset%206.jpeg?updatedAt=1762342827058",
      alt: "Commercial Security Systems"
    }
  ];

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm xs:text-base text-muted-foreground mb-6">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
            {trustedByImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-28 xs:w-36 md:w-44 lg:w-48 h-auto transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};