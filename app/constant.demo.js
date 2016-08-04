
  function ConstantDemo()
    {
            const constValue=200;
            // Below line will error out
            //constValue=33;
            console.log(`This is a constant value that cannot be changed '${constValue}'`);
    };

module.exports={
        demoCall:ConstantDemo
}