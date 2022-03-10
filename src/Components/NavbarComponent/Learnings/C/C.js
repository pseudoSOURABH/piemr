import React from "react";
import { Link } from "react-router-dom";
import "./C.css";
import { useState } from "react";

export const C = () => {
  const [cstate, setcstate] = useState("features");

  return (
    <div>
      <div className="c-contain">
        <div className="container1">
          <ul>
            <li className="headingofC">Basics of C</li>
            <li className="option" onClick={() => setcstate("introduction")}>
              what is C language.
            </li>

            <li className="option" onClick={() => setcstate("history")}>
              history of C.
            </li>
            <li className="option" onClick={() => setcstate("features")}>
              Features Of C
            </li>
            <li className="option" onClick={() => setcstate("install")}>
              How to install C
            </li>

            <li className="option" onClick={() => setcstate("firstCprogram")}>
              First C program
            </li>

            <li className="option" onClick={() => setcstate("flowOfC")}>
              Flow of C program
            </li>
            <li className="option" onClick={() => setcstate("printfscanf")}>
              printf scanf
            </li>
            <li className="option" onClick={() => setcstate("VariblesInC")}>
              Variables in C
            </li>
            <li className="option" onClick={() => setcstate("Dtype")}>
              Data types in C
            </li>
            <li className="option" onClick={() => setcstate("keyword")}>
              Keywords in C
            </li>
            <li className="option" onClick={() => setcstate("identifiers")}>
              Identifiers in C
            </li>
            <li className="option" onClick={() => setcstate("operators")}>
              Operators in C
            </li>
            <li className="option" onClick={() => setcstate("Comments")}>
              C Comments
            </li>
            <li className="option" onClick={() => setcstate("escapeseq")}>
              C Escape Sequence
            </li>
            <li className="option" onClick={() => setcstate("ascii")}>
              Ascii Value in C
            </li>
            <li className="option" onClick={() => setcstate("constant")}>
              Constant in C
            </li>
            <li className="option" onClick={() => setcstate("literal")}>
              Literals in C
            </li>
            <li className="option" onClick={() => setcstate("token")}>
              Tokens in C
            </li>
            <li className="option" onClick={() => setcstate("boolean")}>
              C Boolean
            </li>
            <li className="option" onClick={() => setcstate("static")}>
              Static in C
            </li>
            <li className="option" onClick={() => setcstate("comVSrun")}>
              Compile Time vs Run Time
            </li>
            <li className="option" onClick={() => setcstate("error")}>
              Programming errors in C
            </li>
            <li className="option" onClick={() => setcstate("condi-op")}>
              Conditional operator in C
            </li>
            <li className="option" onClick={() => setcstate("bitwise")}>
              bitwise operator in C
            </li>
            <li className="option" onClick={() => setcstate("2s-com")}>
              2S component in C
            </li>
            <li className="option" onClick={() => setcstate("funda")}>
              C Fundamental test
            </li>

            <li className="headingofC">C Control Statements </li>
            <li className="option" onClick={() => setcstate("ifelse")}>
              C if-else
            </li>
            <li className="option" onClick={() => setcstate("switch")}>
              C switch
            </li>
            <li className="option" onClick={() => setcstate("loops")}>
              C Loops
            </li>
            <li className="option" onClick={() => setcstate("dowhile")}>
              C do-while Loop
            </li>
            <li className="option" onClick={() => setcstate("while")}>
              C while Loop
            </li>
            <li className="option" onClick={() => setcstate("for")}>
              C for Loop
            </li>
            <li className="option" onClick={() => setcstate("break")}>
              C break
            </li>
            <li className="option" onClick={() => setcstate("continue")}>
              C continue
            </li>
            <li className="option" onClick={() => setcstate("goto")}>
              C goto
            </li>
            <li className="option" onClick={() => setcstate("typecast")}>
              Type Casting
            </li>
            <li className="option" onClick={() => setcstate("ctrlstmnt")}>
              C Control Statement Test
            </li>

            <li className="headingofC">C Functions</li>
            <li className="option" onClick={() => setcstate("whtfunc")}>
              What is function
            </li>
            <li className="option" onClick={() => setcstate("val&ref")}>
              Call:Value & Reference
            </li>
            <li className="option" onClick={() => setcstate("recur")}>
              Recurssion
            </li>
            <li className="option" onClick={() => setcstate("strgcls")}>
              Storage Class
            </li>
            <li className="option" onClick={() => setcstate("functst")}>
              C Function Test
            </li>

            <li className="headingofC">C Array</li>
            <li className="option" onClick={() => setcstate("1d")}>
              1-D Array
            </li>
            <li className="option" onClick={() => setcstate("2d")}>
              2-D Array
            </li>
            <li className="option" onClick={() => setcstate("arrtofunc")}>
              Array to Function
            </li>
            <li className="option" onClick={() => setcstate("arrtst")}>
              C Array Test
            </li>

            <li className="headingofC">C Pointers</li>
            <li className="option" onClick={() => setcstate("ptr")}>
              C Pointers
            </li>
            <li className="option" onClick={() => setcstate("ptrtoptr")}>
              C Pointer to Pointer
            </li>
            <li className="option" onClick={() => setcstate("arthptr")}>
              C Pointer Arithmatic
            </li>
            <li className="option" onClick={() => setcstate("ptrtst")}>
              C Pointer Test
            </li>

            <li className="headingofC">C Dynamic Memory</li>
            <li className="option" onClick={() => setcstate("dmemo")}>
              Dynamic Memory
            </li>

            <li className="headingofC">C Strings</li>
            <li className="option" onClick={() => setcstate("str")}>
              Strings in C
            </li>
            <li className="option" onClick={() => setcstate("getsputs")}>
              C gets() & puts()
            </li>
            <li className="option" onClick={() => setcstate("strfun")}>
              C String Functions
            </li>
            <li className="option" onClick={() => setcstate("strlen")}>
              C strlen
            </li>
            <li className="option" onClick={() => setcstate("strcpy")}>
              C strcpy()
            </li>
            <li className="option" onClick={() => setcstate("strcat")}>
              C strcat()
            </li>
            <li className="option" onClick={() => setcstate("strcmp")}>
              C strcmp()
            </li>
            <li className="option" onClick={() => setcstate("strrev")}>
              C strrev()
            </li>
            <li className="option" onClick={() => setcstate("strlwr")}>
              C strlwr()
            </li>
            <li className="option" onClick={() => setcstate("strupr")}>
              C strupr()
            </li>
            <li className="option" onClick={() => setcstate("strstr")}>
              C strstr()
            </li>
            <li className="option" onClick={() => setcstate("strtst")}>
              C String Test
            </li>

            <li className="headingofC">C Math</li>
            <li className="option" onClick={() => setcstate("cmath")}>
              C Math Functions
            </li>

            <li className="headingofC">C Structure Union</li>
            <li className="option" onClick={() => setcstate("struct")}>
              C Structure
            </li>
            <li className="option" onClick={() => setcstate("arrofstruct")}>
              Array of Structure
            </li>
            <li className="option" onClick={() => setcstate("neststruct")}>
              C Nested Structure
            </li>
            <li className="option" onClick={() => setcstate("uni")}>
              Union
            </li>
            <li className="option" onClick={() => setcstate("structtst")}>
              C structure Test
            </li>

            <li className="headingofC">C File Handeling</li>
            <li className="option" onClick={() => setcstate("flhndl")}>
              C File Handleing
            </li>
            <li className="option" onClick={() => setcstate("fprintffscanf")}>
              C fprintf() fscanf()
            </li>
            <li className="option" onClick={() => setcstate("fputfget")}>
              C fputc() fgetc()
            </li>
            <li className="option" onClick={() => setcstate("fputsfgets")}>
              C fputs() fgets()
            </li>
            <li className="option" onClick={() => setcstate("fseek")}>
              C fseek()
            </li>
            <li className="option" onClick={() => setcstate("rewind")}>
              C rewind()
            </li>
            <li className="option" onClick={() => setcstate("ftell()")}>
              C ftell()
            </li>

            <li className="headingofC">C Preprocessor</li>
            <li className="option" onClick={() => setcstate("prepro")}>
              C Preprocessor
            </li>
            <li className="option" onClick={() => setcstate("C Macros")}>
              C Macros
            </li>
            <li className="option" onClick={() => setcstate("include")}>
              C #include
            </li>
            <li className="option" onClick={() => setcstate("define")}>
              C #define
            </li>
            <li className="option" onClick={() => setcstate("undef")}>
              C #undef
            </li>
            <li className="option" onClick={() => setcstate("ifdef")}>
              C #ifdef
            </li>
            <li className="option" onClick={() => setcstate("ifndef")}>
              C #ifndef
            </li>
            <li className="option" onClick={() => setcstate("if")}>
              C #if
            </li>
            <li className="option" onClick={() => setcstate("else")}>
              C #else
            </li>
            <li className="option" onClick={() => setcstate("error")}>
              C #error
            </li>
            <li className="option" onClick={() => setcstate("pragma")}>
              C #pragma
            </li>
            <li className="option" onClick={() => setcstate("preprotst")}>
              C Preprocessor Test
            </li>

            <li className="headingofC">C Command Line</li>
            <li className="option" onClick={() => setcstate("cmdlnarg")}>
              Command Line Arguments
            </li>

            <li className="headingofC">C misc</li>
            <li className="option" onClick={() => setcstate("exp")}>
           C Expressions
            </li>
            <li className="option" onClick={() => setcstate("dseg")}>
           Data Segments
            </li>

            <li className="option" onClick={() => setcstate("flow")}>
           flow of C program
           </li>
           <li className="option" onClick={() => setcstate("enum")}>
           Enum in C
           </li>
           <li className="option" onClick={() => setcstate("clsoflang")}>
           Classification of<br></br>
           Programming Languages
            </li>
           
            

            <li className="option" onClick={() => setcstate("getch")}>
           getch() in C
            </li>
            <li className="option" onClick={() => setcstate("typvsdef")}>
           Typedef vs define in C
           </li>
           <li className="option" onClick={() => setcstate("funcall")}>
           What is function call in C
           </li>
            

            <li className="headingofC">C Programming Test</li>
            <li className="option" onClick={() => setcstate("prgmtst")}>
           C programming test
            </li>
           

            <li className="headingofC">C Programs</li>
            <li className="option" onClick={() => setcstate("tpcprgm")}>
           Top 10+ C Programs
            </li>
            <li className="option" onClick={() => setcstate("fbncser")}>
           Fibonacii Series
           </li>
           <li className="option" onClick={() => setcstate("prnmbr")}>
           Prime Number
            </li>
            <li className="option" onClick={() => setcstate("plndrmnmbr")}>
           Palindrome Number
           </li>
           <li className="option" onClick={() => setcstate("fct")}>
           Factorial
            </li>
            <li className="option" onClick={() => setcstate("armstrgnmbr")}>
           Armstrong Number
           </li>
           <li className="option" onClick={() => setcstate("smofdgt")}>
           Sum Of digits
           </li>
           <li className="option" onClick={() => setcstate("rvrsnmbr")}>
           Reverse a Number
            </li>
            <li className="option" onClick={() => setcstate("")}>
           Swap a Number
            </li>
            <li className="option" onClick={() => setcstate("Print 'Helo' without ;")}>
           
           </li>
           <li className="option" onClick={() => setcstate("assmbcdinC")}>
           Assembly Code in C
           </li>
           <li className="option" onClick={() => setcstate("cprgmwthmn")}>
          C Program without main
           </li>
           <li className="option" onClick={() => setcstate("mtrxmlt")}>
           Matrix Multiplication
           </li>
           <li className="option" onClick={() => setcstate("dcmltbnr")}>
           Decimal to Binary
           </li>
           <li className="option" onClick={() => setcstate("nmbrinchr")}>
           Number in Characters
           </li>
           <li className="option" onClick={() => setcstate("alphtrng")}>
           Alphabet Triangle
           </li>
           <li className="option" onClick={() => setcstate("nmbrtrn")}>
           Number Triangle
           </li>
           <li className="option" onClick={() => setcstate("finctrn")}>
           Fibonacii Trinagle
           </li>
           <li className="option" onClick={() => setcstate("hexdcmltbnr")}>
           Hexadecimal to Binary
           </li>
           <li className="option" onClick={() => setcstate("hexdcmltdc")}>
           Hexadecimal to Decimal
           </li>
           <li className="option" onClick={() => setcstate("octhex")}>
           Octal to Hexadecimal
           </li>

           <li className="option" onClick={() => setcstate("Strnmbr")}>
           Strong No. in C
           </li>
           <li className="option" onClick={() => setcstate("strprgm")}>
           Star Program in C
           </li>
           <li className="option" onClick={() => setcstate("itoafunc")}>
           itoa Function in C
           </li>
           <li className="option" onClick={() => setcstate("extrlngfct")}>
           Extra Long Factorials 
           </li>
           <li className="option" onClick={() => setcstate("lpyr")}>
           Leap Year
           </li>
           <li className="option" onClick={() => setcstate("prfctnmbr")}>
           Perfect No. 
           </li>
           <li className="option" onClick={() => setcstate("vrvsconst")}>
           Variable vs Constant
           </li>
           <li className="option" onClick={() => setcstate("rndrbnprgm")}>
           Round Robin program
           </li>
           <li className="option" onClick={() => setcstate("rtsqdreq")}>
           Roots of Quadratic Equation
           </li>
           <li className="option" onClick={() => setcstate("tpcstvstpcnv")}>
           Type Casting vs Type Conversion
           </li>
           <li className="option" onClick={() => setcstate("mdlsop")}>
           Modulus Operator in C
           </li>
           <li className="option" onClick={() => setcstate("smfrstnmbr")}>
           Sum of first N numbers
           </li>
           <li className="option" onClick={() => setcstate("bgontion")}>
           Big O notation 
           </li>
           <li className="option" onClick={() => setcstate("lcmtwonmbr")}>
           LCM of two numbers
           </li>
           <li className="option" onClick={() => setcstate("whvsdowlloop")}>
           while Loop vs do-while Loop
           </li>
           <li className="option" onClick={() => setcstate("bnrtdcml")}>
           Binary to Decimal number
           </li>
           <li className="option" onClick={() => setcstate("gcdtwnmbr")}>
           GCD of two numbers
           </li>
           <li className="option" onClick={() => setcstate("gtchr")}>
           Getchar() in C
           </li>
           <li className="option" onClick={() => setcstate("flwchrt")}>
           Flowchart in C
           </li>
           <li className="option" onClick={() => setcstate("prmdptrns")}>
           Pyramid Patterns in C
           </li>
           <li className="option" onClick={() => setcstate("rndmfunc")}>
           Random function in C
           </li>
           <li className="option" onClick={() => setcstate("fldtrng")}>
           Floyd Triangle in C
           </li>
           <li className="option" onClick={() => setcstate("hdrfls")}>
           C Header Files
           </li>
           <li className="option" onClick={() => setcstate("absfunc")}>
           abs() function in C
           </li>
           <li className="option" onClick={() => setcstate("atmfunc")}>
           Atom function in C
           </li>
           <li className="option" onClick={() => setcstate("structptr")}>
           Structure pointer in C
           </li>
           <li className="option" onClick={() => setcstate("sprintf")}>
           sprintf() in C
           </li>
           <li className="option" onClick={() => setcstate("rngint")}>
           Range of int in C
           </li>
           <li className="option" onClick={() => setcstate("timefrmt")}>
           24 hour-12 hour time
           </li>
           <li className="option" onClick={() => setcstate("dbl")}>
           double in C
           </li>
           <li className="option" onClick={() => setcstate("main")}>
           main in C
           </li>
           <li className="option" onClick={() => setcstate("clcltr")}>
           Calculator pragram 
           </li>
           <li className="option" onClick={() => setcstate("calloc")}>
           Calloc() in C
           </li>
           <li className="option" onClick={() => setcstate("usrdfndvslbrfunc")}>
           user defined vs library functions
           </li>
           <li className="option" onClick={() => setcstate("memset")}>
           Memset C
           </li>
           <li className="option" onClick={() => setcstate("ascci")}>
           Ascii table in C
           </li>
           <li className="option" onClick={() => setcstate("Staticfn")}>
           Static function in C
           </li>
           <li className="option" onClick={() => setcstate("rvrsestr")}>
           Reverse a string
           </li>
           <li className="option" onClick={() => setcstate("twnprmnmbr")}>
           Twin prime numbers in C
           </li>
           <li className="option" onClick={() => setcstate("strchr")}>
           strchr() function in C
           </li>
           <li className="option" onClick={() => setcstate("structofprgm")}>
           Structure of a program
           </li>
           <li className="option" onClick={() => setcstate("pwrfn")}>
           Power function in C
           </li>
           <li className="option" onClick={() => setcstate("malloc")}>
           Malloc in C
           </li>
           <li className="option" onClick={() => setcstate("tblprgm")}>
           Table Program in C
           </li>
           <li className="option" onClick={() => setcstate("cnvuptolw")}>
           Convert Uppercase to Lowercase
           </li>
           <li className="option" onClick={() => setcstate("unrop")}>
           Unary Operator in C
           </li>

           <li className="option" onClick={() => setcstate("arthop")}>
           Arithmatic Operator in C
           </li>
           <li className="option" onClick={() => setcstate("cell")}>
           Cell function in C
           </li>
           <li className="option" onClick={() => setcstate("rltional")}>
           Relational Operator in C
           </li>
           <li className="option" onClick={() => setcstate("assgn")}>
           Assignment Operator in C
           </li>
           <li className="option" onClick={() => setcstate("princr")}>
           Pre-Increament Operator
           </li>
           <li className="option" onClick={() => setcstate("pstincr")}>
           Post-decreament operator
           </li>
           <li className="option" onClick={() => setcstate("opr")}>
           Operator in C
           </li>
           <li className="option" onClick={() => setcstate("ptrvsarr")}>
           Pointer vs Array
           </li>
           <li className="option" onClick={() => setcstate("rstrctkey")}>
           Restrict Keyword in C
           </li>
           <li className="option" onClick={() => setcstate("EXTFN")}>
           The exit() function in C
           </li>
           <li className="option" onClick={() => setcstate("cnstqlfr")}>
           Const Qualifier
           </li>
           <li className="option" onClick={() => setcstate("sqncpnt")}>
           Sequence Points in C
           </li>
           <li className="option" onClick={() => setcstate("angrm")}>
           Anagram in C
           </li>
           <li className="option" onClick={() => setcstate("incrop")}>
           Increament Operator
           </li>
           <li className="option" onClick={() => setcstate("decrop")}>
           Decreament Operator
           </li>
           <li className="option" onClick={() => setcstate("lgclandop")}>
           Logical AND Operator in C
           </li>
           <li className="option" onClick={() => setcstate("shift")}>
           Shift Operator in C
           </li>
           <li className="option" onClick={() => setcstate("nrfrhrptr")}>
           Near,Far & Huge pointers
           </li>
           <li className="option" onClick={() => setcstate("rmvdplct")}>
           Remove Duplicate elements <br></br>
           from an array
           </li>
           <li className="option" onClick={() => setcstate("gnrclnkdlst")}>
           Generic Linked List
           </li>
           <li className="option" onClick={() => setcstate("isalnum")}>
           isalnum() function
           </li>
           <li className="option" onClick={() => setcstate("isalpha")}>
           isalpha function
           </li>
           <li className="option" onClick={() => setcstate("bsctionmthd")}>
           Bisection Method
           </li>
           <li className="option" onClick={() => setcstate("snpritffn")}>
           snprintf function
           </li>
           <li className="option" onClick={() => setcstate("rmvelefrmarr")}>
           Remove an element from <b></b>
            an array
           </li>
           <li className="option" onClick={() => setcstate("seqncrt")}>
           Sequence Root
           </li>
           <li className="option" onClick={() => setcstate("isprint")}>
           isprint() function in C
           </li>
           <li className="option" onClick={() => setcstate("isdigit")}>
           isdigit function in C
           </li>
           <li className="option" onClick={() => setcstate("isgraph")}>
           isgraph() function in C
           </li>
           <li className="option" onClick={() => setcstate("lgclntop")}>
           Logical NOT(!) Operator
           </li>
           <li className="option" onClick={() => setcstate("slfrefstruct")}>
           Self-referential structure
           </li>
         

            

            <li className="headingofC">C Interview</li>
            <li className="option" onClick={() => setcstate("cintrqsn")}>
           C Interview Queations
           </li>
          </ul>

          <div className="c-box">
            {cstate === "history" && (
              <div className="content1">
                history of c language Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Atque in ipsum perspiciatis architecto
                debitis, id corporis cumque, odit animi itaque sit velit
                repellat rem iure doloribus quae natus quasi provident
                blanditiis dignissimos? Doloribus debitis aut molestiae
                recusandae eveniet distinctio voluptatibus animi omnis ab
                officiis, in inventore nemo nisi voluptate explicabo impedit
                hic! Dolore blanditiis repudiandae vitae commodi dolorem
                accusamus minima necessitatibus suscipit accusantium libero
                itaque eligendi nemo odit quisquam repellendus, distinctio
                assumenda nesciunt aperiam, impedit quas magni rem perferendis
                tempore cumque? Esse dolorum quod dignissimos facere,
                distinctio, laboriosam optio molestias ut, ab rerum dolorem odit
                quibusdam accusamus non. Odit id eligendi perferendis repellat!
                Veritatis velit nostrum incidunt libero quasi. Odio tempora
                nesciunt ex amet nulla quidem neque, maiores quasi porro
                distinctio natus explicabo. Beatae, rem voluptatibus maxime
                accusamus blanditiis deleniti vitae nulla animi dicta! Dolore
                iste hic odio, beatae consequatur odit nihil autem perferendis
                veniam, dolor sint nostrum magni obcaecati quos voluptates dicta
                nobis numquam! Modi quae quam excepturi repellendus ab nesciunt
                quis rerum cum iure vel nam sapiente, in eveniet animi! Fugit
                expedita consequatur fugiat animi, tenetur dolorum laudantium
                error necessitatibus? Blanditiis quibusdam id libero sit dolores
                veniam consequatur. Delectus quaerat incidunt animi iste laborum
                aperiam deserunt, non illum. Quisquam, dolore quasi.
                Voluptatibus animi beatae quisquam in vitae odio ut repellat,
                omnis, sunt provident soluta qui esse ex saepe corporis facilis
                sapiente quo atque molestias laborum. Illo, quis quod
                repudiandae in molestiae sed aut cupiditate, dolor, recusandae
                deleniti rem molestias fuga qui! Iste, aliquam iure, ipsam
                perferendis dicta, incidunt voluptatum veniam unde
                necessitatibus ducimus laudantium impedit odio quos. Pariatur
                impedit sed ea, inventore iure voluptatibus, omnis quibusdam
                dolore odio, veniam corporis iste porro optio eos? Eos, vel
                necessitatibus officiis, hic, asperiores soluta alias blanditiis
                quis impedit inventore maxime vero! Quo id voluptate aliquam
                aspernatur consequatur ipsum esse, temporibus eveniet.
              </div>
            )}
          </div>

          <div className="c-box">
            {cstate === "introduction" && (
              <div className="content1">
                we are having introduction of C language. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Quos vitae dicta similique?
                Laudantium itaque aspernatur architecto culpa sint quo dolorem.
                Aliquid, autem. Provident, libero hic, deleniti ea porro
                quibusdam eligendi eaque ipsum, cum earum saepe quae temporibus
                sapiente accusamus suscipit soluta ipsa neque recusandae aliquid
                omnis perferendis! Ullam nostrum quaerat quod modi nam
                asperiores, minus mollitia aspernatur rem ut vero ab, temporibus
                voluptate iusto eius reprehenderit, nulla reiciendis ea dolore
                illum unde tempore explicabo pariatur ipsum? Explicabo quisquam
                dolor blanditiis expedita quae magnam eos odio asperiores?
                Consequuntur quidem velit nam distinctio voluptate a, modi
                maxime, magni recusandae nisi consectetur dolorem accusantium
                ex, vel ab dolore doloremque cupiditate labore voluptatem
                veritatis commodi animi amet. Consequatur quam accusamus quaerat
                voluptatibus nesciunt ducimus iusto similique temporibus beatae
                odit atque nam, cum, deserunt voluptatum harum necessitatibus
                reprehenderit quas? Culpa quod veniam alias eum commodi eos ea
                neque, laudantium voluptatem, animi quaerat praesentium
                assumenda ipsa dolorem ad voluptas eaque accusantium fuga
                incidunt perferendis, impedit accusamus illum laborum provident.
                Cumque quod ab est sequi magni! Dicta rem esse quos
                reprehenderit dignissimos ullam alias asperiores! Consectetur
                dolore iusto, quibusdam perspiciatis, ullam exercitationem enim
                ut cum harum beatae illum accusantium quisquam officiis libero
                iure veritatis ratione aliquid corporis! Voluptatum quidem,
                pariatur eius perferendis doloremque repellat voluptatibus minus
                corrupti accusamus dolorem laudantium rem aperiam modi
                praesentium dolore ipsam harum qui itaque sit libero id?
                Recusandae, omnis unde repudiandae temporibus accusantium in
                explicabo laudantium ullam officia id deleniti ad eum sapiente
                rerum officiis? Aperiam eos, sit veritatis eaque ipsam
                inventore, assumenda, illum blanditiis tempore similique
                accusantium harum nisi nam aliquam tempora! Facilis, recusandae
                perferendis doloremque enim tenetur natus porro. Sed dignissimos
                tempora repellendus! Ipsa autem enim fugit harum reiciendis
                blanditiis, beatae soluta deleniti eum doloremque. At qui nemo
                hic, tempore quis eum commodi nobis fuga dolorum, deserunt
                dolore, praesentium quo.
              </div>
            )}
          </div>

          <div className="c-box">
            {cstate === "features" && (
              <div className="content1">this is features of C.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
