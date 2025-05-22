import { motion } from "framer-motion";

export const TrustedBySection = () => {
  const trustedByImages = [
    {
      src: "https://i.imgur.com/bYFf1f2.jpg",
      alt: "Trusted Partner Logo 1"
    },
    {
      src: "https://i.imgur.com/TDQTiN0.jpg",
      alt: "Trusted Partner Logo 2"
    },
    {
      src: "https://i.imgur.com/tvzc1Iq.jpg",
      alt: "Trusted Partner Logo 3"
    },
    {
      src: "https://i.imgur.com/h8s4sKH.jpg",
      alt: "Trusted Partner Logo 4"
    },
    {
      src: "https://i.imgur.com/6Uxb4tU.jpeg",
      alt: "Trusted Partner Logo 5"
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