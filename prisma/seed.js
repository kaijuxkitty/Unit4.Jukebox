const {PrismaClient} = require{'@prisma/client'};

const prisma = new PrismaClent();


const usersData =[
    {  },

    {  },
];

const tracksData =[
  {   },
  {   },
];

async function main() {
    console.log('Start Seeding...')
    for (const u of usersData) {
        const user = await prisma.user.create({
            data: u,
        });
        console.log('Created user with id {$user.id}');
    }
    for (const t of tracksData) {
        const track = await prisma.track.create({
            data: t,
        })
        console.log('Created trackwith id: ${track.id}');
    }
    for (let i=0; i < 10;i++) {
        const randomUserId = Math.floor(Math.random()*usersData.length)+ 1;
        const randomTrackIds = [];
        const numTracks = Math.floor(Math.random()*tracksData.length)+ 1;

        for (let j=0; j < numTracks; j++) {
            let randomTrackId;
            do{
                randomTrackId = Math.floor(Math.random()*tracksData.length) +1;
            } while(randomTrackIds.includes(randomTrackId));
            randomTrackIds.push(randomTrackId);
        }
        const playlist = await prisma.playlist.create({
            data: {
            user: {connect:{id:randomUserId}},
            tracks: {connect:randomTrackIds.map(id=> ({id}))},
            }
            });
        console.log('Created playlist with id: ${playlist.id}')
            }
            console.log('Finished seeding');
        }
        main()
        .then(async() => {
            await prisma.$disconnect();
        })
        .catch(async(e) =>{
            console.error(e);
            await prisma.$disconnect();
            process.exit(1)
        })
    