import React from 'react';
import ArtistCards from '../components/ArtistCards';

export default function Giggers() {
    return (
        <div className="fullContainer">
            <h2 className="pageTitle">Listings near you</h2>
            {/* in the future we will add logic for a search in area input that will search the DB for the ones that are in that area or close */}
            {/* this input will be a functinal component */}
            <div className="giggersSec">
                {/* this will be mapped when we set up the Database */}
                <ArtistCards
                    artistImage = "https://www.coverbandcentral.com/wp-content/uploads/2018/07/13348861.jpg"
                    artistName="The Strangers"
                    rating = "4.5"
                    price = "43"
                    reviewNum = "15"
                />
                <ArtistCards
                    artistName="Goonies"
                    rating = "5"
                    price = "200"
                    reviewNum = "126"
                    artistImage = "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/GH-Band-Playing-jpg-1559750190.jpg"
                />
                <ArtistCards
                    artistName="Pippers"
                    rating = "3.4"
                    price = "60"
                    reviewNum = "12"
                    artistImage = "https://www.republicrecords.com/sites/g/files/aaj1546/f/styles/suzuki_breakpoints_image_tablet_16x9/public/Pearl%20Jam.jpg?itok=jLDvntIZ"
                />
                <ArtistCards
                    artistName="The Lemon Heads"
                    rating = "4"
                    price = "100"
                    reviewNum = "18"
                    artistImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8N_2qqH2frk8-K0qTWiGdPgv-VW9cZtsFMZw4YAWUzAhQ1b0B&usqp=CAU"
                />
            </div>
        </div>
    )
}
