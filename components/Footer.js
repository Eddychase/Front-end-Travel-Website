import React from 'react'

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 space-y-20 px-32 py-14 bg-gray-300 text-gray-600">

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold"> Tripitaca</h5>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold"> About</h5>
                <p>How Tripitaca works</p>
                <p>Social Room</p>
                <p>Investors</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold"> Links</h5>
                <p>Places to Stay</p>
                <p>Insider</p>
                <p>Become a Host</p>
                <p>View Listings</p>
                <p>Explore Places</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold"> Help Center</h5>
                <p>Support Forum</p>
                <p>Terms and Conditions</p>
                <p>Support Policy</p>
                <p>Refund and Cancellation Policy</p>
                <p>Report Activity</p>
            </div>
        </div>
    )
}

export default Footer
