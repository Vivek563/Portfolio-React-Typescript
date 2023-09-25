

function SleepingPanda() {
  return (
    <>
    <svg viewBox="0 0 359.4 140.2" style={{width:"200%", height:"200%"}}>
        {/* <!-- panda --> */}
        <defs>
            <linearGradient id="panda" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" style={{stopColor:"#FFFFFF",stopOpacity:"1"}} />
                <stop offset="100%" style={{stopColor:"#bbbbbb",stopOpacity:"1"}} />
            </linearGradient>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:"#27313F",stopOpacity:"1"}} />
                <stop offset="100%" style={{stopColor:"#228CD9",stopOpacity:"1"}} />
            </linearGradient>
        </defs>
        <path
            d="M 9.2164 25.7275 C 9.6802 22.6983 18.4723 15.0104 27.8905 22.48 C 28.3561 28.9202 24.1309 37.1592 20.2585 39.6926 C 9.4392 39.86 8.7494 28.035 9.2136 25.7285 ">
        </path>
        <path
            d="M 20.6036 37.17 C 22.2984 32.97 21.0458 32.3207 26.8953 23.6618 C 42.448 2.6898 79.2752 3.475 95.2138 20.4832 C 111.3638 37.6451 138 45.3556 140.7672 56.86 C 143.3208 77.12 140.258 98.25 139.9464 111.08 C 138.3773 119.3557 99.5655 126.2367 77.3181 125.8019 C 54.7346 125.1731 29.962 122.4364 22.8 110 C 15.8916 96.48 16.4996 47.55 20.7708 36.79 "
            fill="url(#panda)" stroke="black"></path>
        <path
            d="M 140.258 55.3 C 147.3032 40.5 179.0594 37.4092 194.9217 52.705 C 214.3719 74.0436 201.9087 94.2491 210.2175 97.2705 C 210.784 128.6174 148.96 135 140.1888 110.198 C 137.2636 99.2 136.8684 62.06 140.1744 55.32 "
            fill="url(#panda)" stroke="black"></path>
        <path
            d="M 159.6092 44.7739 C 158.4762 46.8511 148.4679 54.2157 141.1032 54.5934 C 130.5284 39.8641 157.532 30.0446 159.6092 44.7739 ">
        </path>
        <path
            d="M 175.5323 43.4326 C 174.0064 43.0202 169.6388 42.4335 164.519 42.6967 C 162.2005 33.093 180.3296 36.5014 175.5057 43.4113 ">
        </path>
        <path
            d="M 19.684 40.9 C 27.8008 35.85 47.2028 32.5729 51.7068 69.5534 C 53.8403 97.9999 49.8104 109.1415 45.5434 123.8388 C 50.4098 128.243 32.479 126.8295 30.4197 126.8686 C 27.7136 126.7488 14.5078 127.718 14.3632 110.2779 C 14.0372 89.15 12.2132 47.09 19.684 40.9 ">
        </path>
        <path
            d="M 110.4901 32.9906 C 122.4842 40.5925 140.2017 50.3302 140.2344 55.3541 C 141.9517 62.8608 143.426 70.0387 140.1824 110.9719 C 137.4748 118.1175 119.6985 122.1079 97.8651 124.7169 C 89.0073 117.6496 98.815 47.265 110.4966 32.9619 ">
        </path>
        <path
            d="M 99.0073 92.8419 C 57.8534 88.2265 38.0457 148.0342 113.4304 122.0727 C 107.8534 111.8804 107.4688 94.3804 99.0073 92.8419 ">
        </path>
        <path
            d="M 168.5155 100.9388 C 173.4123 107.4679 198.5493 98.6537 197.5699 88.2071 C 196.663 81.5372 196.2641 74.1696 187.7763 68.6199 C 175.0446 63.0702 163.9451 93.104 168.5155 100.9388 ">
        </path>
        <path
            d="M 210.1581 97.4027 C 212.5683 97.9478 219.0484 94.2578 216.583 88.7582 C 213.9754 83.9934 202.2939 84.4281 206.5968 93.7734 C 207.6053 95.7904 208.6193 96.9605 210.2946 97.404">
        </path>

        {/* <!-- butterfly wings --> */}
        <g id="leftwing">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:"#27313F",stopOpacity:"1"}} />
                    <stop offset="100%" style={{stopColor:"#228CD9",stopOpacity:"1"}} />
                </linearGradient>
            </defs>
            <path
                d="M 297.452 24.263 C 297.981 23.998 298.741 24.432 299.319 24.646 C 301.191 25.277 305.993 24.438 306 26 C 306.527 24.773 306.081 22.552 305.089 21.875 C 304.375 21.348 303.18 21.59 302.947 21.391 C 302.57 20.993 303.937 20.472 304.37 19.607 C 305.762 16.768 302.424 14.599 302 14 C 301.088 12.659 300.939 10.324 302 8 C 294.156 10.099 294.059 17.849 295.603 22.424 C 295.867 23.264 297.051 24.437 297.452 24.263 "
                fill="black" stroke="black"></path>
            <path
                d="M 305.593 24.956 C 304.329 25.147 304.791 23.204 305.181 23.262 C 305.663 23.349 306.002 24.875 305.593 24.956 "
                fill="url(#grad1)"></path>
            <path
                d="M 297.488 23.273 C 297.873 23.921 298.279 24.103 298.814 24.056 C 299.603 23.975 303.465 24.697 304.096 24.449 C 304.746 24.2 304.765 23.32 304.21 23.186 C 303.48 23.217 302.504 23.15 302.002 23.108 C 300.549 23.032 298.731 23.617 297.489 23.272 "
                fill="url(#grad1)"></path>
            <path
                d="M 298 23 C 298.677 23.376 301.168 22.743 302.197 22.595 C 302.927 22.504 304.278 23.039 304.329 22.595 C 304.391 21.547 302.462 21.744 302.221 21.715 C 301.351 21.645 298.705 23.123 298 23 "
                fill="url(#grad1)"></path>
            <path
                d="M 296.746 22.918 C 297.356 22.942 298.172 22.815 298.735 22.646 C 299.79 22.238 301.324 21.52 302.447 20.647 C 302.914 20.24 299.959 20.521 298.901 20.879 C 298.003 21.169 296.216 22.871 296.746 22.918 "
                fill="url(#grad1)"></path>
            <path
                d="M 296.999 21.463 C 297.807 20.453 298.688 20.013 301.723 19.92 C 304.365 19.781 304.295 17.719 303 16 C 302.285 15.028 301.903 16.738 301.078 17.319 C 299.487 18.612 297.746 18.043 296.974 21.427 C 296.948 21.53 296.982 21.482 296.999 21.463 "
                fill="url(#grad1)"></path>
            <path
                d="M 296.369 22.888 C 296.34 20.991 296.915 19.069 299.206 17.664 C 300.321 17.007 300.627 15.91 300.885 15.33 C 301.207 14.489 300.613 12.223 298.897 12.507 C 297.827 12.691 297.21 13.461 296.848 13.904 C 295.191 15.818 295.343 21.625 296.277 22.888 C 296.291 22.906 296.368 22.952 296.369 22.888 "
                fill="url(#grad1)"></path>
            <path
                d="M 299.505 11.785 C 300.403 12.277 300.788 12.76 300.506 11.504 C 300.265 10.122 300.924 9.161 301 9 C 301.037 8.928 300.951 8.884 300.823 8.906 C 299.633 9.077 297.847 11.125 297.632 11.456 C 297.402 11.717 296.466 13.339 297.522 12.387 C 298.04 11.93 298.901 11.479 299.505 11.784"
                fill="url(#grad1)"></path>
        </g>
        <g id="rightwing">
            <path
                d="M 297.452 24.263 C 297.981 23.998 298.741 24.432 299.319 24.646 C 301.191 25.277 305.993 24.438 306 26 C 306.527 24.773 306.081 22.552 305.089 21.875 C 304.375 21.348 303.18 21.59 302.947 21.391 C 302.57 20.993 303.937 20.472 304.37 19.607 C 305.762 16.768 302.424 14.599 302 14 C 301.088 12.659 300.939 10.324 302 8 C 294.156 10.099 294.059 17.849 295.603 22.424 C 295.867 23.264 297.051 24.437 297.452 24.263 "
                fill="black" stroke="black"></path>
            <path
                d="M 305.593 24.956 C 304.329 25.147 304.791 23.204 305.181 23.262 C 305.663 23.349 306.002 24.875 305.593 24.956 "
                fill="url(#grad1)"></path>
            <path
                d="M 297.488 23.273 C 297.873 23.921 298.279 24.103 298.814 24.056 C 299.603 23.975 303.465 24.697 304.096 24.449 C 304.746 24.2 304.765 23.32 304.21 23.186 C 303.48 23.217 302.504 23.15 302.002 23.108 C 300.549 23.032 298.731 23.617 297.489 23.272 "
                fill="url(#grad1)"></path>
            <path
                d="M 298 23 C 298.677 23.376 301.168 22.743 302.197 22.595 C 302.927 22.504 304.278 23.039 304.329 22.595 C 304.391 21.547 302.462 21.744 302.221 21.715 C 301.351 21.645 298.705 23.123 298 23 "
                fill="url(#grad1)"></path>
            <path
                d="M 296.746 22.918 C 297.356 22.942 298.172 22.815 298.735 22.646 C 299.79 22.238 301.324 21.52 302.447 20.647 C 302.914 20.24 299.959 20.521 298.901 20.879 C 298.003 21.169 296.216 22.871 296.746 22.918 "
                fill="url(#grad1)"></path>
            <path
                d="M 296.999 21.463 C 297.807 20.453 298.688 20.013 301.723 19.92 C 304.365 19.781 304.295 17.719 303 16 C 302.285 15.028 301.903 16.738 301.078 17.319 C 299.487 18.612 297.746 18.043 296.974 21.427 C 296.948 21.53 296.982 21.482 296.999 21.463 "
                fill="url(#grad1)"></path>
            <path
                d="M 296.369 22.888 C 296.34 20.991 296.915 19.069 299.206 17.664 C 300.321 17.007 300.627 15.91 300.885 15.33 C 301.207 14.489 300.613 12.223 298.897 12.507 C 297.827 12.691 297.21 13.461 296.848 13.904 C 295.191 15.818 295.343 21.625 296.277 22.888 C 296.291 22.906 296.368 22.952 296.369 22.888 "
                fill="url(#grad1)"></path>
            <path
                d="M 299.505 11.785 C 300.403 12.277 300.788 12.76 300.506 11.504 C 300.265 10.122 300.924 9.161 301 9 C 301.037 8.928 300.951 8.884 300.823 8.906 C 299.633 9.077 297.847 11.125 297.632 11.456 C 297.402 11.717 296.466 13.339 297.522 12.387 C 298.04 11.93 298.901 11.479 299.505 11.784"
                fill="url(#grad1)"></path>
        </g>
        {/* <!-- butterfly body --> */}
        <g>
            <path
                d="M 293.0437 21.9765 C 293.327 21.3611 298.3635 24.383 298.0079 25.0742 C 297.5339 25.9433 292.6358 22.6647 293.0437 21.9765 "
                fill="black"></path>
            <path
                d="M 293.1824 22.0848 C 293.4984 21.2553 292.4516 20.7812 291.9974 21.2948 C 291.3653 22.0453 292.5701 22.9736 293.1824 22.0848 "
                fill="black"></path>
            <path
                d="M 291.8986 21.0775 C 290.8107 20.9981 289.2899 18.9045 288.3023 19.0428 C 287.137 19.2205 288.3023 17.4232 288.9936 18.5095 C 289.1525 18.3907 289.3055 18.5662 289.2306 18.707 C 289.1194 18.8746 288.8644 18.7733 288.9663 18.5383 C 288.2478 17.648 287.4061 19.1873 288.3317 18.9622 C 289.3264 18.7776 290.9774 20.8839 292.0278 20.9607 C 291.9891 21.019 291.9544 21.0814 291.8993 21.0782 "
                fill="black"></path>
            <path
                d="M 291.6907 21.4082 C 289.8736 20.3617 288.7807 21.1977 287.3258 21.0925 C 285.819 20.9927 286.9407 19.201 287.5226 20.3416 C 287.6829 20.1827 287.9314 20.3883 287.793 20.5849 C 287.6211 20.7547 287.3822 20.5533 287.496 20.3636 C 286.8589 19.457 286.0951 20.9993 287.3544 20.9916 C 288.9114 20.9768 290.0854 20.3333 291.8256 21.3414 C 291.8748 21.3714 291.7153 21.4201 291.6906 21.4081"
                fill="black"></path>
        </g>
        {/* <!-- grass --> */}
        <path d="M 255 127 C 261 126 269 126 275 127" fill="#265905"></path>
        <g id="leftgrass" className="grasses">
            <path
                d="M 261.3606 126.4924 C 261.3109 124.1187 258.6106 116.9269 256.953 113.6652 C 260.4553 118.7717 261.9525 125.402 261.7479 126.5403 C 261.7457 126.5628 261.3591 126.523 261.3605 126.4924 "
                fill="#339A01"></path>
        </g>
        <g id="rightgrass" className="grasses">
            <path
                d="M 262.0067 126.5387 C 262.8479 125.175 264.3724 121.1633 264.9589 113.9132 C 265 120 263.626 124.6567 262.443 126.5462 C 262.4347 126.5572 262.001 126.5479 262.0067 126.5386 "
                fill="#339A01"></path>
        </g>
        <g id="midgrass" className="grasses">
            <path
                d="M 261.5949 126.5368 C 262.0254 124.4713 262.0908 121.7508 260.3899 103.1797 C 262.7078 120.1007 262.5453 124.7313 262.0904 126.551 C 262.0861 126.5659 261.5894 126.5579 261.5949 126.5368"
                fill="#309201"></path>
        </g>
        {/* <!-- sleepsigns --> */}
        <g className="sleepsignholder">
            <path id="sleepsign"
                d="M 0.9999 0.4411 C 5 0 5 0 9.5191 0.4883 C 7 -3 3.1489 -5.1567 1 -8 C 5 -7 5 -7 9 -8 C 9.1118 -8.0304 9.1347 -8.5353 8.9977 -8.4955 C 5.0036 -7.6138 4.0046 -7.611 1.0002 -8.5035 C 0.3291 -8.732 0.3215 -8.732 0.5051 -7.9975 C 3.1697 -5.1774 5.5363 -3.3921 8.5448 -0.4003 C 9.0502 0.1893 9.0502 0.1816 8.0012 -0.0175 C 5.0187 -0.4918 4.9935 -0.4918 1 0 C 0.9483 0.0073 0.9638 0.4444 0.9999 0.441">
            </path>
            <animateTransform attributeName="transform" begin="0s" type="scale" dur="3s" from="1" to=".5"
                repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="3s" repeatCount="indefinite" />
        </g>
        <g className="sleepsignholder">
            <path id="sleepsign1"
                d="M 0.9999 0.4411 C 5 0 5 0 9.5191 0.4883 C 7 -3 3.1489 -5.1567 1 -8 C 5 -7 5 -7 9 -8 C 9.1118 -8.0304 9.1347 -8.5353 8.9977 -8.4955 C 5.0036 -7.6138 4.0046 -7.611 1.0002 -8.5035 C 0.3291 -8.732 0.3215 -8.732 0.5051 -7.9975 C 3.1697 -5.1774 5.5363 -3.3921 8.5448 -0.4003 C 9.0502 0.1893 9.0502 0.1816 8.0012 -0.0175 C 5.0187 -0.4918 4.9935 -0.4918 1 0 C 0.9483 0.0073 0.9638 0.4444 0.9999 0.441">
            </path>
            <animateTransform attributeName="transform" begin="0s" type="scale" dur="2.5s" from="1" to=".5"
                repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="2.5s" repeatCount="indefinite" />
        </g>
        <path id="sleeproute"
            d="M 212.1893 78.9173 C 211 61 204 50 192.7254 43.1727 C 186.773 39.9676 187.2308 24.247 192.4201 21.1945"
            fill="none"></path>
        <animateMotion xlinkHref="#sleepsign1" begin=".5s" dur="3s" fill="freeze" repeatCount="indefinite">
            <mpath xlinkHref="#sleeproute"/>

        </animateMotion>
        <path id="sleeproute"
            d="M 212.1893 78.9173 C 211 61 204 50 192.7254 43.1727 C 186.773 39.9676 187.2308 24.247 192.4201 21.1945"
            fill="none"></path>
        <animateMotion xlinkHref="#sleepsign" begin="0s" dur="3s" fill="freeze" repeatCount="indefinite">
            <mpath xlinkHref="#sleeproute"/>

        </animateMotion>

    </svg>
    </>
  )
}

export default SleepingPanda
