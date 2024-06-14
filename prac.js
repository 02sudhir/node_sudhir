function LevelTwo() {
    console.log("Inside Level Two!")
    }
    
    function LevelOne() {
    LevelTwo()
    console.log("Inside Level one!")

    }
    
    function main() {
    LevelOne()
    }
    
    main()
    