import type { SVGProps } from "@builder.io/qwik"

const BGICon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={210}
        height={187}
        fill="none"
        viewBox="0 0 210 187"
        style={{ width: "100%", height: "100%" }}
        {...props}
    >
        <path
            d="M58.5049 86.8852C55.8039 91.5259 49.0992 91.5231 46.4021 86.8801L6.10864 17.516C3.3978 12.8494 6.76464 6.99992 12.1615 6.99992L92.8266 6.99993C98.2261 6.99993 101.593 12.8545 98.8765 17.5211L58.5049 86.8852Z"
            fill="url(#paint0_linear_7_42)"
        />
        <path
            d="M163.283 86.5042C160.566 91.1171 153.889 91.1012 151.2 86.4756L111.13 17.5451C108.414 12.8733 111.795 7.01342 117.201 7.02393L197.787 7.18071C203.195 7.19123 206.545 13.0693 203.799 17.7305L163.283 86.5042Z"
            fill="url(#paint1_linear_7_42)"
        />
        <path
            d="M111.184 176.357C108.504 180.99 101.828 181.024 99.1011 176.418L58.4709 107.789C55.7171 103.137 59.0507 97.2523 64.4562 97.2225L145.041 96.7787C150.449 96.7489 153.847 102.602 151.139 107.283L111.184 176.357Z"
            fill="url(#paint2_linear_7_42)"
        />
        <path
            d="M103.907 8.92554L54.1 95.6261C53.717 96.2927 54.1983 97.1242 54.9671 97.1242H155.706C156.479 97.1242 156.96 96.2843 156.568 95.6177L105.636 8.91714C105.247 8.25546 104.289 8.26011 103.907 8.92554Z"
            stroke="url(#paint3_radial_7_42)"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="238 238"
        />
        <defs>
            <linearGradient id="paint0_linear_7_42" x1="-0.000133485" y1="52.1449" x2="105" y2="52.1449" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1263FF" />
                <stop offset="1" stop-color="#FF4040" />
            </linearGradient>
            <linearGradient id="paint1_linear_7_42" x1="209.88" y1="52.0457" x2="104.881" y2="51.7522" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4E47FF" />
                <stop offset="1" stop-color="#992B2B" />
            </linearGradient>
            <linearGradient id="paint2_linear_7_42" x1="105.246" y1="186.711" x2="104.751" y2="97.0006" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4E47FF" />
                <stop offset="1" stop-color="#992B2B" />
            </linearGradient>
            <radialGradient id="paint3_radial_7_42" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.346 64.6817) rotate(90) scale(119.731 139.118)">
                <stop stop-color="#FFE714" />
                <stop offset="1" stop-color="#FF15E8" />
            </radialGradient>
        </defs>
    </svg>
)
export { BGICon }
