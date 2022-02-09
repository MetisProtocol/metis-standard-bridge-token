//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./L2StardardERC20.sol";

contract CustomERC20 is L2StandardERC20 {
    bool public pause;
    address public owner;

    constructor(address _l2Bridge, address _l1Token)
        L2StandardERC20(_l2Bridge, _l1Token, "Pausable", "Example")
    {
        owner = msg.sender;
    }

    function setPause(bool _pause) public {
        require(msg.sender == owner, "403");
        pause = _pause;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        require(!pause, "paused");
        super._beforeTokenTransfer(from, to, amount);
    }
}
