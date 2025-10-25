// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=dQw4w9WgXcQ&modestbranding=1&disablekb=1"
        title="Rick Astley - Never Gonna Give You Up"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          border: 'none',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default Index;