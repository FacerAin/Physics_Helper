console.log("hjdsfkas")
window.onload = function () {
    $(document).ready(function () {
        console.log('ready')
        $("#calculate").click(function () {
            //table1
            let L1 = Number($("#l1_A").val())
            console.log(L1)
            let L2 = Number($("#l2_A").val())
            let M1 = Number($("#m1_A").val())
            let M2 = Number($("#m2_A").val())
            for (let i = 1; i <= 5; i++) {
                console.log(i)
                let T1i = Number($(`#t1i_A${i}`).val())
                let T1f = Number($(`#t1f_A${i}`).val())
                let T2f = Number($(`#t2f_A${i}`).val())
                let V1i = (L1 / T1i).toFixed(4)
                let V1f = (L1 / T1f).toFixed(4)
                let V2f = (L1 / T2f).toFixed(4)
                let P1i = (M1 * V1i).toFixed(4)
                let P1f = 0
                let P2f = (M2 * V2f).toFixed(4)
                let Pi = P1i
                let Pf = (Number(P2f) + Number(P1f)).toFixed(4)
                let difference=(Math.abs(Pi-Pf)/Pi*100).toFixed(2)
                $(`#v1i_A${i}`).text(V1i)
                $(`#v1f_A${i}`).text(V1f)
                $(`#v2f_A${i}`).text(V2f)
                $(`#p1i_A${i}`).text(P1i)
                $(`#p1f_A${i}`).text(P1f)
                $(`#p2f_A${i}`).text(P2f)
                $(`#pi_A${i}`).text(Pi)
                $(`#pf_A${i}`).text(Pf)
                $(`#diff_A${i}`).text(difference)
            }
            //table2
            L1 = Number($("#l1_B").val())
            L2 = Number($("#l2_B").val())
            M1 = Number($("#m1_B").val())
            M2 = Number($("#m2_B").val())
            for (let i = 1; i <= 5; i++) {
                console.log(i)
                T1i = Number($(`#t1i_B${i}`).val())
                T1f = Number($(`#t1f_B${i}`).val())
                T2f = Number($(`#t2f_B${i}`).val())
                V1i = (L1 / T1i).toFixed(4)
                V1f = (L1 / T1f).toFixed(4)
                V2f = (L1 / T2f).toFixed(4)
                P1i = (M1 * V1i).toFixed(4)
                P1f = (M1 * V1f).toFixed(4)
                P2f = (M2 * V2f).toFixed(4)
                let Pi = P1i
                let Pf = (Number(P2f) + Number(P1f)).toFixed(4)
                let difference=(Math.abs(Pi-Pf)/Pi*100).toFixed(2)
                $(`#v1i_B${i}`).text(V1i)
                $(`#v1f_B${i}`).text(V1f)
                $(`#v2f_B${i}`).text(V2f)
                $(`#p1i_B${i}`).text(P1i)
                $(`#p1f_B${i}`).text(P1f)
                $(`#p2f_B${i}`).text(P2f)
                $(`#pi_B${i}`).text(Pi)
                $(`#pf_B${i}`).text(Pf)
                $(`#diff_B${i}`).text(difference)
            }
            //table3
            L1 = Number($("#l1_C").val())
            L2 = Number($("#l2_C").val())
            M1 = Number($("#m1_C").val())
            M2 = Number($("#m2_C").val())
            for (let i = 1; i <= 5; i++) {
                console.log(i)
                T1i = Number($(`#t1i_C${i}`).val())
                T1f = Number($(`#t1f_C${i}`).val())
                T2f = Number($(`#t2f_C${i}`).val())
                V1i = (L1 / T1i).toFixed(4)
                V1f = (L1 / T1f).toFixed(4)
                V2f = (L1 / T2f).toFixed(4)
                P1i = (M1 * V1i).toFixed(4)
                P1f = (M1 * V1f).toFixed(4)
                P2f = (M2 * V2f).toFixed(4)
                let Pi = P1i
                let Pf = (Number(P2f) - Number(P1f)).toFixed(4)
                let difference=(Math.abs(Pi-Pf)/Pi*100).toFixed(2)
                $(`#v1i_C${i}`).text(V1i)
                $(`#v1f_C${i}`).text(V1f)
                $(`#v2f_C${i}`).text(V2f)
                $(`#p1i_C${i}`).text(P1i)
                $(`#p1f_C${i}`).text(P1f)
                $(`#p2f_C${i}`).text(P2f)
                $(`#pi_C${i}`).text(Pi)
                $(`#pf_C${i}`).text(Pf)
                $(`#diff_C${i}`).text(difference)
            }
            //table4
            L1 = Number($("#l1_D").val())
            L2 = Number($("#l2_D").val())
            M1 = Number($("#m1_D").val())
            M2 = Number($("#m2_D").val())
            for (let i = 1; i <= 5; i++) {
                console.log(i)
                T1i = Number($(`#t1i_D${i}`).val())
                T1f = Number($(`#t1f_D${i}`).val())
                let T2i = Number($(`#t2i_D${i}`).val())
                T2f = Number($(`#t2f_D${i}`).val())
                V1i = (L1 / T1i).toFixed(4)
                V1f = (L1 / T1f).toFixed(4)
                let V2i = (L1 / T2i).toFixed(4)
                V2f = (L1 / T2f).toFixed(4)
                P1i = (M1 * V1i).toFixed(4)
                P1f = (M1 * V1f).toFixed(4)
                let P2i = (M2 * V2i).toFixed(4)
                P2f = (M2 * V2f).toFixed(4)
                let Pi = (Number(P1i) - Number(P2i)).toFixed(4)
                let Pf = (Number(P2f) - Number(P1f)).toFixed(4)
                let difference=(Math.abs(Pi-Pf)/Pi*100).toFixed(2)
                $(`#v1i_D${i}`).text(V1i)
                $(`#v1f_D${i}`).text(V1f)
                $(`#v2i_D${i}`).text(V2i)
                $(`#v2f_D${i}`).text(V2f)
                $(`#p1i_D${i}`).text(P1i)
                $(`#p1f_D${i}`).text(P1f)
                $(`#p2i_D${i}`).text(P2i)
                $(`#p2f_D${i}`).text(P2f)
                $(`#pi_D${i}`).text(Pi)
                $(`#pf_D${i}`).text(Pf)
                $(`#diff_D${i}`).text(difference)
            }
            //table5
            L1 = Number($("#l1_E").val())
            L2 = Number($("#l2_E").val())
            M1 = Number($("#m1_E").val())
            M2 = Number($("#m2_E").val())
            for (let i = 1; i <= 5; i++) {
                console.log(i)
                T1i = Number($(`#t1i_E${i}`).val())
                T1f = Number($(`#t1f_E${i}`).val())
                T2i = Number($(`#t2i_E${i}`).val())
                T2f = Number($(`#t2f_E${i}`).val())
                V1i = (L1 / T1i).toFixed(4)
                V1f = (L1 / T1f).toFixed(4)
                V2i = (L1 / T2i).toFixed(4)
                V2f = (L1 / T2f).toFixed(4)
                P1i = (M1 * V1i).toFixed(4)
                P1f = (M1 * V1f).toFixed(4)
                P2i = (M2 * V2i).toFixed(4)
                P2f = (M2 * V2f).toFixed(4)
                Pi = (Number(P1i) - Number(P2i)).toFixed(4)
                Pf = (Number(P2f) - Number(P1f)).toFixed(4)
                difference=( Math.abs(Pi-Pf)/Pi*100).toFixed(2)
                $(`#v1i_E${i}`).text(V1i)
                $(`#v1f_E${i}`).text(V1f)
                $(`#v2i_E${i}`).text(V2i)
                $(`#v2f_E${i}`).text(V2f)
                $(`#p1i_E${i}`).text(P1i)
                $(`#p1f_E${i}`).text(P1f)
                $(`#p2i_E${i}`).text(P2i)
                $(`#p2f_E${i}`).text(P2f)
                $(`#pi_E${i}`).text(Pi)
                $(`#pf_E${i}`).text(Pf)
                $(`#diff_E${i}`).text(difference)
            }

        })
        $("#clear").click(function () {
            $("#l1_A").val('')
            $("#l2_A").val('')
            $("#m1_A").val('')
            $("#m2_A").val('')
            $("#l1_B").val('')
            $("#l2_B").val('')
            $("#m1_B").val('')
            $("#m2_B").val('')
            $("#l1_C").val('')
            $("#l2_C").val('')
            $("#m1_C").val('')
            $("#m2_C").val('')
            $("#l1_D").val('')
            $("#l2_D").val('')
            $("#m1_D").val('')
            $("#m2_D").val('')
            $("#l1_E").val('')
            $("#l2_E").val('')
            $("#m1_E").val('')
            $("#m2_E").val('')

            for (let i = 1; i <= 5; i++) {
                $(`#t1i_A${i}`).val('')
                $(`#t1f_A${i}`).val('')
                $(`#t2f_A${i}`).val('')
                $(`#t1i_B${i}`).val('')
                $(`#t1f_B${i}`).val('')
                $(`#t2f_B${i}`).val('')
                $(`#t1i_C${i}`).val('')
                $(`#t1f_C${i}`).val('')
                $(`#t2f_C${i}`).val('')
                $(`#t1i_D${i}`).val('')
                $(`#t2i_D${i}`).val('')
                $(`#t1f_D${i}`).val('')
                $(`#t2f_D${i}`).val('')
                $(`#t1i_E${i}`).val('')
                $(`#t2i_E${i}`).val('')
                $(`#t1f_E${i}`).val('')
                $(`#t2f_E${i}`).val('')
                $(`#v1i_A${i}`).text('')
                $(`#v1f_A${i}`).text('')
                $(`#v2f_A${i}`).text('')
                $(`#p1i_A${i}`).text('')
                $(`#p1f_A${i}`).text('')
                $(`#p2f_A${i}`).text('')
                $(`#pi_A${i}`).text('')
                $(`#pf_A${i}`).text('')
                $(`#diff_A${i}`).text('')
                $(`#v1i_B${i}`).text('')
                $(`#v1f_B${i}`).text('')
                $(`#v2f_B${i}`).text('')
                $(`#p1i_B${i}`).text('')
                $(`#p1f_B${i}`).text('')
                $(`#p2f_B${i}`).text('')
                $(`#pi_B${i}`).text('')
                $(`#pf_B${i}`).text('')
                $(`#diff_B${i}`).text('')
                $(`#v1i_C${i}`).text('')
                $(`#v1f_C${i}`).text('')
                $(`#v2f_C${i}`).text('')
                $(`#p1i_C${i}`).text('')
                $(`#p1f_C${i}`).text('')
                $(`#p2f_C${i}`).text('')
                $(`#pi_C${i}`).text('')
                $(`#pf_C${i}`).text('')
                $(`#diff_C${i}`).text('')
                $(`#v1i_D${i}`).text('')
                $(`#v1f_D${i}`).text('')
                $(`#v2i_D${i}`).text('')
                $(`#v2f_D${i}`).text('')
                $(`#p1i_D${i}`).text('')
                $(`#p1f_D${i}`).text('')
                $(`#p2i_D${i}`).text('')
                $(`#p2f_D${i}`).text('')
                $(`#pi_D${i}`).text('')
                $(`#pf_D${i}`).text('')
                $(`#diff_D${i}`).text('')
                $(`#v1i_E${i}`).text('')
                $(`#v1f_E${i}`).text('')
                $(`#v2i_E${i}`).text('')
                $(`#v2f_E${i}`).text('')
                $(`#p1i_E${i}`).text('')
                $(`#p1f_E${i}`).text('')
                $(`#p2i_E${i}`).text('')
                $(`#p2f_E${i}`).text('')
                $(`#pi_E${i}`).text('')
                $(`#pf_E${i}`).text('')
                $(`#diff_E${i}`).text('')
            }
        })
    })
}