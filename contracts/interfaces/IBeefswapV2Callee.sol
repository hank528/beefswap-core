pragma solidity >=0.5.0;

interface IBeefswapV2Callee {
    function beefswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
