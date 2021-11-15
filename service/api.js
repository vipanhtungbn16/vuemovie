import axios from "axios";

const token  = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWViNTVmMGRmN2UzN2I0MjRiYzIwYmY2NTJmNDgzYSIsInN1YiI6IjYxODM0ZDk0ZjY1OTZmMDA4OGE4Y2JiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HmCpKbcuA3vO6p7BwKcgjNV-Ncm2ytlkal9mQH1FiFs"

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers:{
        Authorization:`Breaker ${token}`
    }
})