import Image from "next/image";;

const Card = ( {item} ) => {
    const {photoUrl, name, details}= item;
  
  return (
      <div className="flex flex-col items-center md:flex-row">
        <div className="choose_us_card z-10 rounded-lg">
          <Image width={50} height={50} src={photoUrl} alt="" />
          <h3 className=" text-xl text-primary_heading1 font-nunito font-bold capitalize py-3">
            {name}
          </h3>
          <p className="text-sm text-primary_paragraph2">
           {details}
          </p>
        </div>
      </div>
  );
};

export default Card;
