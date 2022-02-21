import { getRandomIntRange } from "src/common/boilerplateFunctions/getRandIntwithRange";
import { LooseObject } from "src/common/commonInterfaces";


export class UserSeedFactory{
    private lastNameArr:String[];
    private firstNameArr:String[];
    constructor(){
        var raw_firstname=`James	4,700,229	Mary	3,196,385
        2	Robert	4,455,696	Patricia	1,558,407
        3	John	4,453,807	Jennifer	1,468,377
        4	Michael	4,335,919	Linda	1,448,303
        5	William	3,564,276	Elizabeth	1,420,377
        6	David	3,564,053	Barbara	1,397,635
        7	Richard	2,454,407	Susan	1,103,569
        8	Joseph	2,335,792	Jessica	1,046,322
        9	Thomas	2,151,864	Sarah	991,910
        10	Charles	2,084,043	Karen	986,057
        11	Christopher	2,038,798	Nancy	966,867
        12	Daniel	1,895,292	Lisa	965,015
        13	Matthew	1,607,467	Betty	924,629
        14	Anthony	1,406,030	Margaret	918,541
        15	Mark	1,347,519	Sandra	873,509
        16	Donald	1,336,753	Ashley	849,297
        17	Steven	1,282,598	Kimberly	839,796
        18	Paul	1,275,700	Emily	830,999
        19	Andrew	1,254,054	Donna	822,330
        20	Joshua	1,220,730	Michelle	812,335
        21	Kenneth	1,220,221	Dorothy	811,392
        22	Kevin	1,174,762	Carol	806,170
        23	Brian	1,168,073	Amanda	773,199
        24	George	1,135,235	Melissa	753,994
        25	Edward	1,079,619	Deborah	740,019
        26	Ronald	1,072,746	Stephanie	738,523
        27	Timothy	1,070,916	Rebecca	729,630
        28	Jason	1,038,335	Sharon	720,826
        29	Jeffrey	975,915	Laura	718,006
        30	Ryan	942,977	Cynthia	705,717
        31	Jacob	933,692	Kathleen	686,217
        32	Gary	900,088	Amy	681,397
        33	Nicholas	894,521	Shirley	663,452
        34	Eric	879,257	Angela	658,968
        35	Jonathan	848,774	Helen	618,563
        36	Stephen	839,278	Anna	618,367
        37	Larry	802,272	Brenda	606,291
        38	Justin	779,504	Pamela	592,696
        39	Scott	769,980	Nicole	589,434
        40	Brandon	761,473	Emma	580,610
        41	Benjamin	740,347	Samantha	578,986
        42	Samuel	714,013	Katherine	571,574
        43	Gregory	707,501	Christine	561,161
        44	Frank	691,530	Debra	548,280
        45	Alexander	675,746	Rachel	546,153
        46	Raymond	668,793	Catherine	542,748
        47	Patrick	664,723	Carolyn	540,963
        48	Jack	636,674	Janet	539,224
        49	Dennis	611,128	Ruth	538,629
        50	Jerry	602,117	Maria	529,342`;

        var raw_lastName=`SMITH	1	2,442,977	828.2
        JOHNSON	2	1,932,812	655.2
        WILLIAMS	3	1,625,252	551.0
        BROWN	4	1,437,026	487.2
        JONES	5	1,425,470	483.2
        GARCIA	6	1,166,120	395.3
        MILLER	7	1,161,437	393.7
        DAVIS	8	1,116,357	378.5
        RODRIGUEZ	9	1,094,924	371.2
        MARTINEZ	10	1,060,159	359.4
        HERNANDEZ	11	1,043,281	353.7
        LOPEZ	12	874,523	296.5
        GONZALEZ	13	841,025	285.1
        WILSON	14	801,882	271.8
        ANDERSON	15	784,404	265.9
        THOMAS	16	756,142	256.3
        TAYLOR	17	751,209	254.7
        MOORE	18	724,374	245.6
        JACKSON	19	708,099	240.1
        MARTIN	20	702,625	238.2
        LEE	21	693,023	234.9
        PEREZ	22	681,645	231.1
        THOMPSON	23	664,644	225.3
        WHITE	24	660,491	223.9
        HARRIS	25	624,252	211.6
        SANCHEZ	26	612,752	207.7
        CLARK	27	562,679	`

        this.firstNameArr = raw_firstname.replace(/[0-9]/g, '').replace(/[^a-zA-Z0-9]/g, ',').split(',').filter(n => n)
        this.lastNameArr = raw_lastName.replace(/[0-9]/g,"").replace(/[^a-zA-Z0-9]/g, ',').split(',').filter(n => n)

    }
    seed(){
        var objectArr=[]

        for (var in1=0;in1<this.lastNameArr.length;in1++){
            for (var in2=0;in2<this.firstNameArr.length;in2++){
                var userSeed:LooseObject={}
                userSeed.firstName=this.firstNameArr[in2];
                userSeed.lastName=this.lastNameArr[in1];
                userSeed.passport=getRandomIntRange(1000,25000000000000)
                objectArr.push(userSeed)
            }
        }
        return objectArr
    }
}