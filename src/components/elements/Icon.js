import { createIcon, Icon } from "@chakra-ui/react";

export const LogoIcon = createIcon({
  displayName: "LogoIcon",
  viewBox: "0 0 400 400",
  path: (
    <g fill-rule="evenodd">
      <path
        d="M158.669 113.064c-.333.334-.35 51.992-.017 53.236l.241.9H187.2V195.585l.9.218c.495.12 12.69.168 27.1.107l26.2-.11v-54l-14.295-.105-14.295-.105-.105-14.295L212.6 113l-26.831-.103c-14.756-.056-26.951.019-27.1.167M195.6 249.372c-12.18 3.389-16.19 19.501-7.014 28.179 9.206 8.707 24.335 3.825 26.664-8.605 2.282-12.184-8.305-22.73-19.65-19.574m-32.305 16.112l.105 15.916h17.2v-6l-5.294-.112-5.295-.111-.105-12.689-.106-12.688-3.305-.116-3.304-.117.104 15.917m56.094-15.399c-.109.284-.152 7.447-.094 15.916l.105 15.399h6.8l.11-6.7c.06-3.685.208-6.7.328-6.7.297 0 .611.343 4.935 5.4 2.069 2.42 4.579 5.255 5.579 6.3l1.818 1.9h4.315c2.664 0 4.315-.156 4.315-.408 0-.35-2.291-3.057-7.441-8.792-4.541-5.055-6.553-7.452-6.556-7.806-.002-.224 2.69-3.554 5.982-7.4 3.292-3.847 5.992-7.129 6-7.294.008-.165-1.767-.3-3.944-.3h-3.96l-1.799 2.1a1691.47 1691.47 0 00-5.269 6.2c-1.907 2.255-3.631 4.1-3.83 4.1-.199 0-.412-2.745-.473-6.1l-.11-6.1-3.306-.116c-2.422-.085-3.36.022-3.505.401m31.106 15.415l.105 15.9 3.3.116 3.3.116V249.6H250.391l.104 15.9m-46.26-8.5c8.585 6.548 1.801 21.684-7.902 17.63-7.121-2.975-6.565-17.531.717-18.762 2.505-.423 5.834.101 7.185 1.132M136.4 299.09c-4.677.696-4.203 5.349.8 7.848 2.038 1.017 2.622 1.51 2.704 2.28.259 2.454-2.725 3.223-4.729 1.218-2.022-2.021-3.735-.964-2.004 1.237 2.6 3.305 9.248 1.708 9.22-2.215-.012-1.755-.983-2.821-3.958-4.344-3.13-1.603-3.693-2.343-2.654-3.491.891-.984 2.098-1.058 3.061-.187.805.729 2.36.43 2.36-.454 0-1.135-2.711-2.204-4.8-1.892m18.281.102c-3.097.587-5.461 4.362-4.979 7.953 1.234 9.204 13.498 8.455 13.498-.824 0-5.374-3.283-8.121-8.519-7.129m86.719-.029c-7.876 1.957-6.187 14.463 1.949 14.43 3.963-.015 6.451-2.867 6.451-7.393 0-5.244-3.572-8.237-8.4-7.037m40.6-.073c-4.677.696-4.203 5.349.8 7.848 2.038 1.017 2.622 1.51 2.704 2.28.259 2.454-2.725 3.223-4.729 1.218-2.022-2.021-3.735-.964-2.004 1.237 2.6 3.305 9.248 1.708 9.22-2.215-.012-1.755-.983-2.821-3.958-4.344-3.13-1.603-3.693-2.343-2.654-3.491.891-.984 2.098-1.058 3.061-.187.805.729 2.36.43 2.36-.454 0-1.135-2.711-2.204-4.8-1.892m-109.909 7.183l.109 7.127h8v-1c0-.964-.105-1.004-2.889-1.117l-2.89-.118-.11-5.882-.111-5.883-1.109-.127-1.11-.128.11 7.128m15.91-1.8c.002 7.038 1.238 9.127 5.399 9.127 4.036 0 5.127-1.821 5.332-8.9l.159-5.5h-2.009l-.141 4.918c-.175 6.097-.632 7.082-3.288 7.082-2.748 0-3.009-.549-3.14-6.618l-.113-5.182-1.1-.127-1.1-.126.001 5.326M206.4 300c0 .678.267.8 1.751.8 2.488 0 2.612.308 2.738 6.827.105 5.469.153 5.773.911 5.773.755 0 .811-.333 1-5.916.224-6.623.244-6.668 3.1-6.678 1.431-.005 1.7-.132 1.7-.806 0-.762-.267-.8-5.6-.8-5.333 0-5.6.038-5.6.8m19.291 6.273l.109 7.127h2v-14l-1.109-.127-1.11-.128.11 7.128m32.896-6.584c-.114.298-.158 3.505-.097 7.126l.11 6.585h2l.113-4.7c.138-5.776.181-5.777 3.553-.084 2.693 4.546 3.946 5.732 4.973 4.705.22-.22.335-3.24.271-7.151l-.11-6.77h-2l-.113 4.7c-.138 5.752-.056 5.753-3.487-.003-2.817-4.725-4.534-6.177-5.213-4.408m-99.147 2.471c2.255 2.255 1.89 7.282-.636 8.774-3.227 1.906-6.804-.599-6.804-4.764 0-4.661 4.412-7.038 7.44-4.01m85.811-.733c3.087 1.596 3.053 8.111-.051 9.662-3.494 1.745-6.2-.394-6.2-4.9 0-4.524 2.714-6.592 6.251-4.762"
        fill="#eaeaeb"
      />
      <path
        d="M0 200v200h400V0H0v200m270.4-87.205v28.795l-14.1.105-14.1.105-.103 26.978c-.08 20.973-.213 27.049-.6 27.294-.273.174-12.602.319-27.397.322l-26.9.006v28.4h-57.6v-57.6H158v-26.92c0-20.404.116-27.036.48-27.4.364-.364 6.996-.48 27.4-.48h26.92V84h57.6v28.795m-63.702 137.223c13.856 6.822 12.013 27.958-2.789 31.968-9.507 2.576-19.326-3.966-20.689-13.786-1.904-13.724 11.479-24.089 23.478-18.182M170.4 261.8l.2 12.8 5.4.2 5.4.2.118 3.165c.084 2.262-.03 3.259-.4 3.494-.593.377-17.126.466-18.085.098-.669-.256-1.011-32.045-.352-32.704.154-.155 1.909-.23 3.9-.167l3.619.114.2 12.8m56.157-12.367c.134.348.243 3.063.243 6.033 0 6.513-.409 6.56 5.717-.666l4.916-5.8 4.484-.113c3.867-.098 4.483-.026 4.483.519 0 .542-3.96 5.415-10.3 12.674-2.384 2.73-3.123 1.41 7.398 13.226 6.257 7.028 6.293 6.694-.715 6.694h-4.351l-1.366-1.5c-.751-.825-3.324-3.749-5.716-6.497l-4.35-4.997-.111 6.18c-.128 7.115.056 6.799-3.956 6.808-4.576.01-4.133 1.748-4.133-16.204 0-18.762-.417-16.99 4-16.99 2.836 0 3.561.122 3.757.633m31.191.267c.491 1.834.28 31.312-.228 31.82-.294.294-1.733.48-3.72.48s-3.426-.186-3.72-.48c-.629-.629-.692-30.777-.066-31.946.679-1.268 7.39-1.159 7.734.126m-60.686 6.883c-6.415 2.288-7.396 13.703-1.461 16.991 5.973 3.309 11.793-.732 11.772-8.174-.019-6.793-4.718-10.811-10.311-8.817m-57.054 42.421c1.287.666 2.173 1.98 1.772 2.629-.562.908-2.261 1.217-3.003.546-.97-.878-2.577-.615-2.577.421 0 .584.702 1.152 2.6 2.105 4.824 2.421 5.546 6.701 1.457 8.641-3.657 1.735-9.692-1.065-8.22-3.815.551-1.03 2.605-.973 3.173.088.815 1.522 3.632 1.89 4.15.542.415-1.082-.3-1.857-2.719-2.95-3.086-1.393-3.95-2.346-3.95-4.357 0-3.589 3.877-5.629 7.317-3.85m19.643-.039c2.67 1.119 4.356 3.962 4.34 7.322-.045 9.758-13.798 10.689-14.677.994-.587-6.467 4.665-10.692 10.337-8.316m14.735.209c.228.425.414 3.207.414 6.182v5.409l2.9.117 2.9.118v2.8l-3.8.117c-6.12.189-5.6.88-5.6-7.445 0-4.998.143-7.255.48-7.592.735-.735 2.243-.571 2.706.294m16.171-.141c.134.348.243 2.738.243 5.311 0 5.471.397 6.456 2.6 6.456 2.241 0 2.6-.95 2.6-6.881v-5.104l.999-.251c2.099-.526 2.201-.255 2.201 5.843 0 4.303-.146 5.916-.619 6.831-1.943 3.755-8.448 3.701-10.407-.088-.859-1.662-1.32-10.556-.615-11.874.564-1.053 2.623-1.221 2.998-.243m27.439-.038c1.116 1.344.171 2.553-2.098 2.684l-2.098.121-.111 5.876c-.102 5.448-.168 5.895-.9 6.127-2.168.689-2.359.216-2.478-6.127l-.111-5.876-2.2-.2c-2.342-.213-3.123-1.247-1.982-2.622.709-.855 11.267-.84 11.978.017m10 .197c.263.492.382 3.314.314 7.457-.12 7.285-.277 7.747-2.448 7.202l-1.062-.266v-7.113c0-4.998.143-7.255.48-7.592.741-.741 2.245-.568 2.716.312m18.82.129c4.818 2.548 4.927 11.073.176 13.764-4.277 2.422-9.501.413-10.832-4.165-2.087-7.177 4.321-12.949 10.656-9.599m15.381 1.159c.662 1.034 1.923 3.014 2.803 4.4l1.6 2.52.1-3.6c.138-4.977.269-5.4 1.665-5.4 1.578 0 1.635.287 1.635 8.206 0 6.669-.032 6.95-.829 7.203-1.76.559-2.528-.108-5.171-4.494L261.4 305l-.113 4.277c-.122 4.596-.439 5.173-2.487 4.523-.811-.257-1.279-12.885-.549-14.789.527-1.372 2.63-.589 3.946 1.469m23.411-1.476c1.287.666 2.173 1.98 1.772 2.629-.562.908-2.261 1.217-3.003.546-.97-.878-2.577-.615-2.577.421 0 .584.702 1.152 2.6 2.105 4.824 2.421 5.546 6.701 1.457 8.641-3.657 1.735-9.692-1.065-8.22-3.815.551-1.03 2.605-.973 3.173.088.815 1.522 3.632 1.89 4.15.542.415-1.082-.3-1.857-2.719-2.95-3.086-1.393-3.95-2.346-3.95-4.357 0-3.589 3.877-5.629 7.317-3.85m-131.772 3.827c-1.879 2.233-1.21 6.815 1.153 7.891 3.128 1.426 5.71-1.069 5.319-5.14-.378-3.933-4.134-5.53-6.472-2.751m86.877-.531c-3.113 3.569-.999 9.493 3.112 8.722 3.314-.622 4.495-6.832 1.675-8.807-1.214-.851-4.014-.801-4.787.085"
        fill="#2c5474"
      />
      <path
        d="M212.8 98.4v14.4h28.8v14.333c0 7.884.075 14.409.166 14.5.092.092 6.572.118 14.4.057l14.234-.11V84h-57.6v14.4M129.6 196v28.8h57.6v-28.79l-14.3-.105-14.3-.105-.105-14.3-.105-14.3H129.6V196"
        fill="#249cbc"
      />
      <path
        d="M212.71 127.19l.11 14.39 14.39.11 14.39.11v-29h-29l.11 14.39m-54.215 54.21l.105 14.4 14.8.071c8.14.039 14.575-.021 14.3-.133-.387-.158-.5-3.412-.5-14.362V167.22l-14.405-.11-14.405-.11.105 14.4"
        fill="#44b3cb"
      />
      <path
        d="M158.48 112.88c-.364.364-.48 7.01-.48 27.467 0 14.842.096 26.89.214 26.773.117-.118.252-12.343.3-27.167L158.6 113l27.2-.204 27.2-.204-27.02-.096c-20.59-.073-27.134.018-27.5.384m83.119 55.72l-.199 27.2-27.2.204-27.2.204 27 .09c14.85.049 27.226-.054 27.503-.229.397-.253.481-6.018.398-27.494l-.104-27.175-.198 27.2m-46.462 80.33c-12.314 3.486-16.306 20.173-6.945 29.027 7.543 7.134 19.841 5.651 25.316-3.051 8.225-13.074-3.814-30.096-18.371-25.976m-32.456.123c-.659.659-.317 32.448.352 32.704.959.368 17.492.279 18.085-.098.37-.235.484-1.232.4-3.494L181.4 275l-5.4-.2-5.4-.2-.2-12.8-.2-12.8-3.619-.114c-1.991-.063-3.746.012-3.9.167m40.719.291c8.471 2.263 13.53 10.631 11.85 19.602-2.329 12.43-17.458 17.312-26.664 8.605-11.947-11.299-.867-32.396 14.814-28.207m15.643.089c-.134.348-.243 7.708-.243 16.357 0 17.952-.443 16.214 4.133 16.204 4.012-.009 3.828.307 3.956-6.808l.111-6.18 4.35 4.997c2.392 2.748 4.965 5.672 5.716 6.497l1.366 1.5h4.351c7.008 0 6.972.334.715-6.694-10.521-11.816-9.782-10.496-7.398-13.226 6.34-7.259 10.3-12.132 10.3-12.674 0-.545-.616-.617-4.483-.519l-4.484.113-4.916 5.8c-6.126 7.226-5.717 7.179-5.717.666 0-7.089.254-6.666-4-6.666-2.836 0-3.561.122-3.757.633m30.971.141c-.626 1.169-.563 31.317.066 31.946.294.294 1.733.48 3.72.48s3.426-.186 3.72-.48c.508-.508.719-29.986.228-31.82-.344-1.285-7.055-1.394-7.734-.126m-80.108 12.914l.105 12.689 5.295.111 5.294.112v6h-17.2l-.105-15.916-.104-15.917 3.304.117 3.305.116.106 12.688m56.404-6.588c.061 3.355.274 6.1.473 6.1.199 0 1.923-1.845 3.83-4.1a1691.47 1691.47 0 015.269-6.2l1.799-2.1h3.96c2.177 0 3.952.135 3.944.3-.008.165-2.708 3.447-6 7.294-3.292 3.846-5.984 7.176-5.982 7.4.003.354 2.015 2.751 6.556 7.806 5.15 5.735 7.441 8.442 7.441 8.792 0 .252-1.651.408-4.315.408h-4.315l-1.818-1.9c-1-1.045-3.51-3.88-5.579-6.3-4.324-5.057-4.638-5.4-4.935-5.4-.12 0-.268 3.015-.328 6.7l-.11 6.7h-6.8l-.105-15.399c-.124-18.279-.525-16.462 3.599-16.317l3.306.116.11 6.1m30.89 9.716v16.016l-3.3-.116-3.3-.116-.105-15.9-.104-15.9H257.2v16.016m-60.15-9.748c-4.406.745-7.36 8.964-5.103 14.199 3.117 7.229 13.339 6.697 15.589-.81 2.447-8.169-2.675-14.709-10.486-13.389m4.638.55c8.86 2.46 7.281 18.021-1.837 18.106-5.295.05-8.067-3.095-8.033-9.113.037-6.611 4.337-10.53 9.87-8.993m-66.791 42.512c-3.776 2.097-2.916 6.177 1.744 8.281 2.419 1.093 3.134 1.868 2.719 2.95-.518 1.348-3.335.98-4.15-.542-.568-1.061-2.622-1.118-3.173-.088-1.472 2.75 4.563 5.55 8.22 3.815 4.089-1.94 3.367-6.22-1.457-8.641-1.898-.953-2.6-1.521-2.6-2.105 0-1.036 1.607-1.299 2.577-.421 1.325 1.199 3.642-.248 2.83-1.767-.953-1.78-4.688-2.605-6.71-1.482m18.483.033c-2.807 1.222-4.412 4.505-4.066 8.318.879 9.695 14.632 8.764 14.677-.994.027-5.834-5.413-9.588-10.611-7.324m18.3-.083c-.337.337-.48 2.594-.48 7.592 0 8.325-.52 7.634 5.6 7.445l3.8-.117V311l-2.9-.   118-2.9-.117v-5.409c0-6.508-1.004-8.592-3.12-6.476m15.879.396c-.705 1.318-.244 10.212.615 11.874 1.959 3.789 8.464 3.843 10.407.088.473-.915.619-2.528.619-6.831 0-6.098-.102-6.369-2.201-5.843l-.999.251v5.104c0 5.931-.359 6.881-2.6 6.881-2.203 0-2.6-.985-2.6-6.456 0-2.573-.109-4.963-.243-5.311-.375-.978-2.434-.81-2.998.243m18.459-.298c-1.141 1.375-.36 2.409 1.982 2.622l2.2.2.111 5.876c.102 5.448.168 5.895.9 6.127 2.168.689 2.359.216 2.478-6.127l.111-5.876 2.098-.121c2.269-.131 3.214-1.34 2.098-2.684-.711-.857-11.269-.872-11.978-.017m19.262-.098c-.337.337-.48 2.594-.48 7.592v7.113l1.062.266c2.171.545 2.328.083 2.448-7.202.129-7.83-.741-10.058-3.03-7.769m14.128.435c-5.166 2.926-4.698 12.213.718 14.26 6.967 2.632 12.952-4.785 9.353-11.591-1.782-3.369-6.586-4.643-10.071-2.669m18.843-.304c-.73 1.904-.262 14.532.549 14.789 2.048.65 2.365.073 2.487-4.523L261.4 305l2.6 4.315c2.643 4.386 3.411 5.053 5.171 4.494.797-.253.829-.534.829-7.203 0-7.919-.057-8.206-1.635-8.206-1.396 0-1.527.423-1.665 5.4l-.1 3.6-1.6-2.52c-4.12-6.489-3.944-6.274-5.252-6.402-.864-.084-1.323.08-1.497.533m22.246-.081c-3.776 2.097-2.916 6.177 1.744 8.281 2.419 1.093 3.134 1.868 2.719 2.95-.518 1.348-3.335.98-4.15-.542-.568-1.061-2.622-1.118-3.173-.088-1.472 2.75 4.563 5.55 8.22 3.815 4.089-1.94 3.367-6.22-1.457-8.641-1.898-.953-2.6-1.521-2.6-2.105 0-1.036 1.607-1.299 2.577-.421 1.325 1.199 3.642-.248 2.83-1.767-.953-1.78-4.688-2.605-6.71-1.482m-140.197.927c.495.309.9.815.9 1.125 0 .884-1.555 1.183-2.36.454-.963-.871-2.17-.797-3.061.187-1.039 1.148-.476 1.888 2.654 3.491 2.975 1.523 3.946 2.589 3.958 4.344.028 3.923-6.62 5.52-9.22 2.215-1.731-2.201-.018-3.258 2.004-1.237 2.004 2.005 4.988 1.236 4.729-1.218-.082-.77-.666-1.263-2.704-2.28-3.361-1.679-4.146-2.634-3.868-4.709.403-3.001 3.999-4.225 6.968-2.372m20.4.416c1.897 1.412 2.5 2.872 2.5 6.048 0 9.279-12.264 10.028-13.498.824-.837-6.241 6.06-10.55 10.998-6.872m86.286-.32c4.117 2.345 3.861 10.322-.408 12.74-4.993 2.828-9.978-.401-9.978-6.462 0-6.189 5.114-9.28 10.386-6.278m38.914-.096c.495.309.9.815.9 1.125 0 .884-1.555 1.183-2.36.454-.963-.871-2.17-.797-3.061.187-1.039 1.148-.476 1.888 2.654 3.491 2.975 1.523 3.946 2.589 3.958 4.344.028 3.923-6.62 5.52-9.22 2.215-1.731-2.201-.018-3.258 2.004-1.237 2.004 2.005 4.988 1.236 4.729-1.218-.082-.77-.666-1.263-2.704-2.28-3.361-1.679-4.146-2.634-3.868-4.709.403-3.001 3.999-4.225 6.968-2.372m-111.589 5.426l.11 5.882 2.89.118c2.784.113 2.889.153 2.889 1.117v1h-8l-.109-7.127-.11-7.128 1.11.128 1.109.127.111 5.883m16.002-.701c.131 6.069.392 6.618 3.14 6.618 2.656 0 3.113-.985 3.288-7.082l.141-4.918h2.009l-.159 5.5c-.205 7.079-1.296 8.9-5.332 8.9-4.161 0-5.397-2.089-5.399-9.127l-.001-5.326 1.1.126 1.1.127.113 5.182M217.6 300c0 .674-.269.801-1.7.806-2.856.01-2.876.055-3.1 6.678-.189 5.583-.245 5.916-1 5.916-.758 0-.806-.304-.911-5.773-.126-6.519-.25-6.827-2.738-6.827-1.484 0-1.751-.122-1.751-.8 0-.762.267-.8 5.6-.8 5.333 0 5.6.038 5.6.8m10.2 6.4v7h-2l-.109-7.127-.11-7.128 1.11.128 1.109.127v7m36-2.303c3.431 5.756 3.349 5.755 3.487.003l.113-4.7h2l.11 6.77c.064 3.911-.051 6.931-.271 7.151-1.027 1.027-2.28-.159-4.973-4.705-3.372-5.693-3.415-5.692-3.553.084l-.113 4.7h-2l-.11-6.585c-.127-7.538-.094-7.714 1.408-7.542.938.108 1.52.828 3.902 4.824m-109.2-2.811c-4.404 2.543-2.883 10.314 2.018 10.314 2.749 0 4.182-1.94 4.182-5.659 0-3.931-3.24-6.364-6.2-4.655m85.785.67c-2.073 1.73-2.118 6.655-.079 8.477 3.08 2.752 7.292.358 7.293-4.146.002-4.628-3.988-7.024-7.214-4.331m-81.197.631c1.928 2.052 1.488 6.605-.767 7.937-2.968 1.753-5.621-.357-5.621-4.473 0-3.945 3.932-6.078 6.388-3.464m86.312-.372c2.82 1.975 1.639 8.185-1.675 8.807-4.111.771-6.225-5.153-3.112-8.722.773-.886 3.573-.936 4.787-.085"
        fill="#7792a5"
      />
    </g>
  ),
});

export const BackgroundLogoIcon = createIcon({
  displayName: "BackgroundLogoIcon",
  viewBox: "0 0 540 540",
  path: (
    <g fill="none">
      <rect x="110" y="110" width="320" height="320" fill="#285474" />
      <rect
        x="340"
        width="200"
        height="200"
        fill="#24A9C5"
        fill-opacity="0.9"
      />
      <rect
        y="340"
        width="200"
        height="200"
        fill="#24A9C5"
        fill-opacity="0.9"
      />
    </g>
  ),
});
