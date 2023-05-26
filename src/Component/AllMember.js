import React from 'react'

const AllMember = () => {
  return (
    <div>
          <div className="w-full flex flex-col gap-2">
              <label
                className="w-full text-xs md:text-sm text-primaryColor font-medium"
                htmlFor="district"
              >
                District
              </label>
              <div className="w-full px-4 py-1 md:py-1.5 bg-white border rounded-md">
                <select
                  className="w-full text-xs md:text-sm outline-none border-none rounded-md"
                  name="district"
                  value={`${shippingState?.district}-${shippingState?.districtId}`}
                  onChange={(e) => {
                    setShippingState({
                      ...shippingState,
                      district: e.target.value?.split("-")[0],
                      districtId: e.target.value?.split("-")[1],
                    });
                    setDistrictId(e.target.value?.split("-")[1]);
                  }}
                >
                  <option value="">Choose District</option>
                  {/* {City.getCitiesOfCountry("BD")?.map((country, index) => (
                  <option key={index} value={country?.name}>
                    {country?.name}
                  </option>
                ))} */}
                  {dataDistricts?.result?.model?.map((district, index) => (
                    <option
                      key={index}
                      value={`${district?.districName}-${district?.districtId}`}
                    >
                      {district?.districName}-{district?.districNameBng}
                    </option>
                  ))}
                </select>
              </div>
              </div>
    </div>
  )
}

export default AllMember