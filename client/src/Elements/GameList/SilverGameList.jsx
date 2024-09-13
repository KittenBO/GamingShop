export default function SilverGameList({ silverAds }) {
  return (
    <div className="w-full my-6">
      {silverAds.map((ad) => (
        <div key={ad.id} className="flex items-center border-b-2 border-grayProfile py-5">
          <div className="w-2/3 px-3 sm:px-5">
            <p className="text-sm sm:text-xl">{ad.text}</p>
          </div>
          <div className="w-1/6 flex flex-col items-center">
            <img src={ad.avatar} alt={ad.username} className="w-2/3 sm:w-1/3 rounded-full" />
            <p className="text-xs sm:text-sm">{ad.username}</p>
            <div className="flex items-center">
              {[...Array(Math.floor(ad.rating))].map((_, index) => (
                <img key={index} src="../GameList/star-icon.svg" alt="Star" className="w-full" />
              ))}
              {ad.rating % 1 !== 0 && (
                <img src="../GameList/half-star-icon.svg" alt="Half Star" className="w-full" />
              )}
            </div>
            <p className="text-xs text-grayChat">{ad.rating}</p>
          </div>
          <div className="w-1/6 text-right pr-2 sm:pr-6">
            <p className="text-sm sm:text-2xl font-bold">{ad.price} руб.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

