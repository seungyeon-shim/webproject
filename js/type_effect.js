function Type_effect(container, type_speed) {
  //----------------------------------------------------------//
  //초기화 조건 체크 변수 선언
  //----------------------------------------------------------//
  this.container_length = $(container).length;
  this.obj_length = $(container + ">*:only-child").length;
  this.type_speed = type_speed
  //----------------------------------------------------------//
  //초기화 조건 체크 후 변수와 함수 설정
  //----------------------------------------------------------//
  if (this.container_length === 1 && this.obj_length === 1 && this.type_speed > 0) {
    this.container = $(container);
    var org = this.org = this.container.children("*:only-child")
    var obj = this.obj = this.org.clone();
    this.obj.addClass("addTypeEffectCursor")
    this.obj.attr("alt", "")
    var setSize = this.setSize = function () {
      if (org.parent().css('display') === 'none') return false
      obj.css({
        "position": "absolute",
        "top": org.position().top,
        "left": org.position().left,
        "width": org[0].getBoundingClientRect().width,
        "height": org[0].getBoundingClientRect().height,
      })//css
    }
    setSize()
    $(window).resize(function () {
      setSize()
    }).scroll(function () {
      setSize()
    })
    this.container.append(this.obj)
    this.org.css("opacity", "0")
    this.html = this.org.html()
    this.html = $.parseHTML(this.html)
    this.obj.empty()

    if (this.html.length != 0) {
      this.state = "set" //this.state = "finish"
      this.toggle_state = false
      this.target_node = null
      this.after_target_node = this.html[0] //this.after_target_node = this.html[this.html.length-1]
      this.parent_node = null
      this.after_parent_node = null
      this.parent_obj = null
      this.after_parent_obj = this.obj
      this.intervalId = null
      this.type_str = ""
      this.cnt = 0
    } else {
      console.log("Type_effect element is empty!");
      return false
    }
  } else {
    console.log("Type_effect setting is wrong!");
    return false;
  }
}
//----------------------------------------------------------//
//이벤트 호출 함수
//----------------------------------------------------------//
Type_effect.prototype.play = function (fn) {
  this.setSize()
  if (this.toggle_state === true) {
    this.toggle_state = false;
    this.state = "play"
  }
  if (this.state === "play" || this.state == undefined || this.state === "finish") { return false; }
  if (this.state === "reverse") {
    this.state = "play"
  }
  if (this.state === "set") {
    this.state = "play"
    this.insert_node(fn)
  }
}
Type_effect.prototype.reverse = function (fn) {
  this.setSize()
  if (this.toggle_state === true) {
    this.toggle_state = false;
    this.state = "reverse"
  }
  if (this.state === "reverse" || this.state == undefined || this.state === "set") { return false; }
  if (this.state === "play") {
    this.state = "reverse"
  }
  if (this.state === "finish") {
    this.state = "reverse";
    this.remove_node(fn)
  }
}
Type_effect.prototype.toggle = function (fn) {
  this.setSize()
  if (this.state == undefined || this.toggle_state === true) {
    return false;
  }
  this.toggle_state = true;
  if (this.state === "set") {
    this.insert_node(fn)
  } else if (this.state === "finish") {
    this.remove_node(fn)
  }
}
//----------------------------------------------------------//
//노드 삽입 함수
//----------------------------------------------------------//
Type_effect.prototype.insert_node = function (fn) {
  if (this.state === "reverse") {
    this.after_target_node = this.target_node
    this.after_parent_node = this.parent_node
    this.after_parent_obj = this.parent_obj
    this.remove_node(fn)
    return false;
  }
  if (this.after_target_node === null) {
    if (this.after_parent_node === null) {
      this.target_node = null
      this.after_target_node = this.html[this.html.length - 1]
      this.parent_node = null
      this.after_parent_node = null
      this.parent_obj = null
      this.after_parent_obj = this.obj
      this.intervalId = null
      this.type_str = ""
      this.str = ""
      this.cnt = 0
      if (this.toggle_state === false) {
        this.state = "finish"
      } else {
        this.state = "reverse"
        this.remove_node()
      }
      try {
        fn()
      } catch {

      }
    } else {
      this.after_target_node = this.after_parent_node.nextSibling
      this.after_parent_node = this.after_parent_node.parentElement
      this.after_parent_obj = this.after_parent_obj.parent()
      this.insert_node(fn)
    }
    return false
  } else {
    this.target_node = this.after_target_node
    this.parent_node = this.after_parent_node
    this.parent_obj = this.after_parent_obj
  }
  if (this.target_node.nodeType === 1) {
    this.parent_obj.append(this.target_node.outerHTML)
    this.after_target_node = this.target_node.firstChild
    this.after_parent_node = this.target_node
    this.parent_obj.children("*:last-child").empty()
    this.after_parent_obj = this.parent_obj.children("*:last-child")
    this.insert_node(fn)
  } else if (this.target_node.nodeType != 1 && this.target_node.nodeType != 3) {
    this.after_target_node = this.target_node.nextSibling
    this.insert_node(fn)
  } else if (this.target_node.nodeType === 3) {
    this.insert_type(fn)
  }
}
//----------------------------------------------------------//
//타이핑 삽입 함수
//----------------------------------------------------------//
Type_effect.prototype.insert_type = function (fn) {
  this.container.find("*").removeClass("addTypeEffectCursor")
  this.parent_obj.addClass("addTypeEffectCursor")
  this.str = this.target_node.nodeValue.replace(/\s+/, ' ')

  this.intervalId = setInterval(() => {
    if (this.state === "reverse") {
      clearInterval(this.intervalId)
      this.remove_type()
      return false;
    }
    if (this.cnt <= this.str.length) {
      this.type_str = this.str.slice(0, this.cnt)
      if (this.parent_obj.contents().length != 0 && this.parent_obj.contents()[this.parent_obj.contents().length - 1].nodeType === 3) {
        this.parent_obj.contents()[this.parent_obj.contents().length - 1].remove()
      }
      this.parent_obj.append(this.type_str)
      this.cnt++

    } else {
      clearInterval(this.intervalId)
      this.after_target_node = this.target_node.nextSibling
      this.cnt = 0
      this.type_str = ""
      this.insert_node(fn)
      return false
    }
  }, this.type_speed)
}
//----------------------------------------------------------//
//노드 제거 함수
//----------------------------------------------------------//
Type_effect.prototype.remove_node = function (fn) {
  if (this.state === "play") {
    this.after_target_node = this.target_node
    this.after_parent_node = this.parent_node
    this.after_parent_obj = this.parent_obj
    this.insert_node(fn)
    return false;
  }
  if (this.after_target_node === null) {
    if (this.after_parent_node === null) {
      this.target_node = null
      this.after_target_node = this.html[0]
      this.parent_node = null
      this.after_parent_node = null
      this.parent_obj = null
      this.after_parent_obj = this.obj
      this.intervalId = null
      this.type_str = ""
      this.str = ""
      this.cnt = 0
      if (this.toggle_state === false) {
        this.state = "set"
      } else {
        this.state = "play"
        this.insert_node(fn)
      }
      try {
        fn()
      } catch {

      }
    } else {
      this.after_target_node = this.after_parent_node.previousSibling
      this.after_parent_node = this.after_parent_node.parentElement
      this.after_parent_obj = this.after_parent_obj.parent()
      this.after_parent_obj.children("*:last-child").remove()
      this.remove_node(fn)
    }
    return false
  } else {
    this.target_node = this.after_target_node
    this.parent_node = this.after_parent_node
    this.parent_obj = this.after_parent_obj
  }
  if (this.target_node.nodeType === 1) {
    this.after_target_node = this.target_node.lastChild
    this.after_parent_node = this.target_node
    this.after_parent_obj = this.parent_obj.children("*:last-child")
    this.remove_node(fn)
  } else if (this.target_node.nodeType != 1 && this.target_node.nodeType != 3) {
    this.after_target_node = this.target_node.previousSibling
    this.remove_node(fn)
  } else if (this.target_node.nodeType === 3) {
    this.remove_type(fn)
  }
}
//----------------------------------------------------------//
//타이핑 제거 함수
//----------------------------------------------------------//
Type_effect.prototype.remove_type = function (fn) {
  this.container.find("*").removeClass("addTypeEffectCursor")
  this.parent_obj.addClass("addTypeEffectCursor")
  this.str = this.parent_obj.contents()[this.parent_obj.contents().length - 1].nodeValue.replace(/\s+/, ' ')
  this.cnt = this.str.length
  this.intervalId = setInterval(() => {
    if (this.state === "play") {
      clearInterval(this.intervalId)
      this.insert_type()
      return false;
    }
    if (this.cnt >= 0) {
      this.type_str = this.str.slice(0, this.cnt)
      if (this.parent_obj.contents().length != 0 && this.parent_obj.contents()[this.parent_obj.contents().length - 1].nodeType === 3) {
        this.parent_obj.contents()[this.parent_obj.contents().length - 1].remove()
      }
      this.parent_obj.append(this.type_str)
      this.cnt--
    } else {
      clearInterval(this.intervalId)
      this.after_target_node = this.target_node.previousSibling
      this.cnt = 0
      this.type_str = ""
      this.remove_node(fn)
      return false
    }
  }, this.type_speed)
}
