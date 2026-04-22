import client1 from '../../../../public/AAA_Client/Pasted image.png';
import client3 from '../../../../public/AAA_Client/Pasted image (2).png';
import client4 from '../../../../public/AAA_Client/Pasted image (3).png';
import client5 from '../../../../public/AAA_Client/Pasted image (4).png';
import client6 from '../../../../public/AAA_Client/Pasted image (5).png';
import client7 from '../../../../public/AAA_Client/Pasted image (6).png';
import client8 from '../../../../public/AAA_Client/Pasted image (7).png';
import client9 from '../../../../public/AAA_Client/Pasted image (8).png';
import client10 from '../../../../public/AAA_Client/Pasted image (9).png';
import client11 from '../../../../public/AAA_Client/Pasted image (10).png';
import client12 from '../../../../public/AAA_Client/Pasted image (11).png';
import client13 from '../../../../public/AAA_Client/Pasted image (12).png';
import client14 from '../../../../public/AAA_Client/Pasted image (13).png';
import client15 from '../../../../public/AAA_Client/Pasted image (14).png';
import client16 from '../../../../public/AAA_Client/Pasted image (15).png';
import client17 from '../../../../public/AAA_Client/Pasted image (16).png';
import client18 from '../../../../public/AAA_Client/Pasted image (17).png';
import client19 from '../../../../public/AAA_Client/Pasted image (18).png';
import client20 from '../../../../public/AAA_Client/Pasted image (19).png';
import client21 from '../../../../public/AAA_Client/Pasted image (20).png';

const ClientLogoCarousel = () => {
  // Client logos with imported images
  const logos = [
    { name: 'Client 1', url: client1 },
    { name: 'Client 3', url: client3 },
    { name: 'Client 4', url: client4 },
    { name: 'Client 5', url: client5 },
    { name: 'Client 6', url: client6 },
    { name: 'Client 7', url: client7 },
    { name: 'Client 8', url: client8 },
    { name: 'Client 9', url: client9 },
    { name: 'Client 10', url: client10 },
    { name: 'Client 11', url: client11 },
    { name: 'Client 12', url: client12 },
    { name: 'Client 13', url: client13 },
    { name: 'Client 14', url: client14 },
    { name: 'Client 15', url: client15 },
    { name: 'Client 16', url: client16 },
    { name: 'Client 17', url: client17 },
    { name: 'Client 18', url: client18 },
    { name: 'Client 19', url: client19 },
    { name: 'Client 20', url: client20 },
    { name: 'Client 21', url: client21 }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="text-center mb-8">
        <h2 className="lg:text-4xl font-bold text-[#f58a1f] uppercase mb-2">Trusted by Industry Leaders</h2>
        <p className="text-gray-600 ">Join a network of industry pioneers</p>
      </div>
      
      <div className="relative">
        {/* Main scrolling container */}
        <div className="flex animate-scroll space-x-8">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center group"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="hidden items-center justify-center w-full h-full text-gray-500 text-sm font-medium"
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientLogoCarousel;