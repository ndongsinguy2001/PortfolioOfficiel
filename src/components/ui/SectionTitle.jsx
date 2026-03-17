const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="border-b-4 border-primary pb-2">{children}</span>
    </h2>
  );
};

export default SectionTitle;